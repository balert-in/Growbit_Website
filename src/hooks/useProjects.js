import { useState, useEffect } from 'react';
import axios from 'axios';
import { ADMIN_API_URL } from '../constants/constant';

let cachedProjects = null;
let projectsPromise = null;

const COLORS = ['#9cd4af', '#75ccc3', '#f87171', '#60a5fa', '#a78bfa'];
const resolveUrl = async (path) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;
  
  try {
    const res = await axios.post(`${ADMIN_API_URL}/agents/getImage`, { PATH: path });
    if (res.data && res.data.message === 'success' && res.data.url) {
      return res.data.url;
    }
  } catch (error) {
    console.error("Error resolving URL:", error);
  }
  return '';
};

const mapProjectData = async (apiProjects) => {
  return Promise.all(apiProjects.map(async (p, index) => ({
    id: p._id,
    name: p.PROJECT_INFO || 'Unknown Project',
    shortName: p.PROJECT_NAME || 'Project',
    logo: await resolveUrl(p.PROJECT_IMAGE),
    themeColor: COLORS[index % COLORS.length],
    shortDescription: (p.PROJECT_DESCRIPTION || '').split('\n')[0] || '',
    fullDescription: (p.PROJECT_DESCRIPTION || '').split('\n').filter((line) => line.trim() !== ''),
    appInfo: {
      version: p.APP_VERSIONS || 'v1.0.0',
      releaseDate: p.RELEASED_DATE
        ? new Date(p.RELEASED_DATE).toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })
        : 'Unknown',
      os: p.PLATFORM || 'Android',
      apkUrl: await resolveUrl(p.APK_URL),
      features: p.KEY_CAPABILITIES ? p.KEY_CAPABILITIES.split('\n').filter((f) => f.trim() !== '') : [],
    },
  })));
};

export const useProjects = () => {
  const [projects, setProjects] = useState(cachedProjects || []);
  const [loading, setLoading] = useState(!cachedProjects);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedProjects) {
      setProjects(cachedProjects);
      setLoading(false);
      return;
    }

    if (!projectsPromise) {
      projectsPromise = axios
        .post(`${ADMIN_API_URL}/Adminagent/ContactUs`, {
          TYPE: 'PROJECTS_LIST',
          PAGE: 1,
          LIMIT: 10,
        })
        .then(async (res) => {
          if (res.data && res.data.message === 'success' && Array.isArray(res.data.data)) {
            cachedProjects = await mapProjectData(res.data.data);
            return cachedProjects;
          }
          throw new Error('Invalid API response format');
        })
        .catch((err) => {
          projectsPromise = null;
          throw err;
        });
    }

    projectsPromise
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Failed to fetch projects');
        setLoading(false);
      });
  }, []);

  return { projects, loading, error };
};
