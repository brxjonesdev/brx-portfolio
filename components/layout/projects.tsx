import React from 'react';
import Project from './project'; // Import the Project component
import projectsData from '@/app/data/projects.json'; // Import the JSON file

export default function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-100 font-sans">
        Projects
      </h2>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </section>
  );
}
