import hdmcLogo from '../assets/HDMC-Logo.png';
import gudmLogo from '../assets/gudmlogo.webp';

export const PROJECTS_DATA = [
  {
    id: 'gudm',
    name: 'Gujarat Urban Development Mission',
    shortName: 'GUDM',
    logo: gudmLogo,
    themeColor: '#9cd4af',
    shortDescription: 'Urban infrastructure and e-governance project managing property surveys and municipal services across Gujarat.',
    fullDescription: [
      'The Gujarat Urban Development Mission (GUDM) acts as a nodal agency for urban infrastructure and e-governance projects, primarily spearheading the e-Nagar portal.',
      'Our team is actively involved in facilitating property surveys and ensuring accurate land records are managed through integrated systems like AnyROR and e-Milkat. This initiative enhances transparency in municipal-level operations such as property tax payments, building permissions, and land management across Urban Local Bodies (ULBs) in Gujarat.',
      'By streamlining the digitization of property cards and survey records, the project aims to improve property transactions, bank loan processes, and the overall legal verification of boundaries for citizens.'
    ],
    appInfo: {
      version: 'v2.1.4',
      os: 'Android & iOS',
      playStoreLink: 'https://play.google.com/store/apps/details?id=dummy.gudm',
      appStoreLink: 'https://apps.apple.com/app/dummy-gudm/id000000000',
      features: [
        'In-App GIS Map for Surveyors',
        'Location-Based Geofencing (Assigned Area Only)',
        'Fake GPS Detection for Accuracy',
        'Property ID (PID) Verification',
        'Utility Bill Validation (Water & Electricity)',
        'Offline Survey Support',
        'Real-Time Data Synchronization'
      ]
    }
  },
  {
    id: 'hdmc',
    name: 'Hubballi-Dharwad Municipal Corporation',
    shortName: 'HDMC',
    logo: hdmcLogo,
    themeColor: '#75ccc3',
    shortDescription: 'Comprehensive GIS-based property survey to modernize property tax systems and improve revenue collection.',
    fullDescription: [
      'The Hubballi-Dharwad Municipal Corporation (HDMC) has embarked on a comprehensive Geographic Information System (GIS)-based property survey to modernize its property tax system and significantly improve municipal revenue collection.',
      'GrowBit teams are executing advanced mapping techniques on the ground, including aerial drone surveys, 3D modelling, road mapping, and digital elevation models to create an accurate digital database of all residential, commercial, and vacant properties within the municipal limits.',
      'This massive data collection effort integrates into a central digital platform, empowering officials to track real-time property developments and assess taxes accurately. The project includes digitization of property records under the e-AASTHI system to ensure transparency and secure documentation.'
    ],
    appInfo: {
      version: 'v3.0.1',
      os: 'Android & iOS',
      playStoreLink: 'https://play.google.com/store/apps/details?id=dummy.hdmc',
      appStoreLink: 'https://apps.apple.com/app/dummy-hdmc/id000000000',
      features: [
        'In-App GIS Map for Surveyors',
        'Location-Based Geofencing (Assigned Area Only)',
        'Fake GPS Detection for Accuracy',
        'Property ID (PID) Verification',
        'Utility Bill Validation (Water & Electricity)',
        'Offline Survey Support',
        'Real-Time Data Synchronization'
      ]
    }
  }
];
