'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectsCard';
import ProjectTag from './ProjectsTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Bootstrap Portfolio Website',
    description: 'Website tersebut dibuat dengan HTML,CSS,Js, dan Bootstrap',
    image: '/image/projects/foto1.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/cesar33-creator/cesar33-creator',
    previewUrl: 'https://cesar33-creator.github.io/cesar33-creator/portofolio.html',
  },
  {
    id: 2,
    title: 'E-commerce Website',
    description: 'Website tersebut dibuat dengan HTML,CSS,Js. Website Tersebut digunakan untuk Menjual Produk PIPPO',
    image: '/image/projects/foto2.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/cesar33-creator/PIPPO',
    previewUrl: 'https://cesar33-creator.github.io/PIPPO/PIPPO.html',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => project.tag.includes(tag));

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === 'All'} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === 'Web'} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === 'Mobile'} />
      </div>
      <ul ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li key={index} variants={cardVariants} initial="initial" animate={isInView ? 'animate' : 'initial'} transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
