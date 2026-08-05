import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HandDrawnTitle from '../common/HandDrawnTitle';
import { PROJECTS_DATA } from '../../constants/projectsData';


const FadeInUp = ({ children, className = "", delay = 0, yOffset = 10 }) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const ProjectCard = ({ project, index }) => (
  <Link to={`/projects/${project.id}`} className="group block cursor-pointer">
    <FadeInUp 
      delay={index * 0.15} 
      yOffset={20}
      className="relative bg-[#161618] rounded-[2rem] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#09090b] rounded-bl-[1.5rem] z-20 flex items-start justify-end pt-2 pr-2 sm:pt-4 sm:pr-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 shadow-lg">
          <ArrowRight className="w-5 h-5 text-[#09090b]" />
        </div>
        <div 
          className="absolute top-0 -left-6 w-6 h-6 pointer-events-none" 
          style={{ background: 'radial-gradient(circle at 0% 100%, transparent 24px, #09090b 24.5px)' }}
        />
        <div 
          className="absolute -bottom-6 right-0 w-6 h-6 pointer-events-none" 
          style={{ background: 'radial-gradient(circle at 0% 100%, transparent 24px, #09090b 24.5px)' }}
        />
      </div>

      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none rounded-[2rem]"
        style={{ background: `radial-gradient(circle at bottom right, ${project.themeColor}, transparent 80%)` }}
      />

      <div className="relative z-10 flex flex-col h-full pt-2">
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-[1.2rem] p-3 sm:p-4 shadow-xl flex items-center justify-center shrink-0 mb-8 border border-white/10">
          <img src={project.logo} alt={project.name} className="w-full h-full object-contain" />
        </div>
        
        <div className="mt-auto pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span 
              className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase"
              style={{ backgroundColor: `${project.themeColor}20`, color: project.themeColor }}
            >
              {project.shortName}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight transition-colors duration-300 group-hover:text-gray-300">
            {project.name}
          </h3>
          
          <p className="text-gray-400 leading-relaxed text-sm sm:text-base line-clamp-3">
            {project.shortDescription}
          </p>
        </div>
      </div>
    </FadeInUp>
  </Link>
);


const ActiveProjects = () => {
  return (
    <section className="relative py-16 md:py-24 bg-[#09090b] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#9cd4af]/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#75ccc3]/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <HandDrawnTitle text="Current Engagements" />
          <FadeInUp className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Active Major Projects
          </FadeInUp>
          <FadeInUp delay={0.1} className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Discover the high-impact property survey initiatives we are currently executing on the ground.
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActiveProjects;
