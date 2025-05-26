import React from 'react';
import { ProjectsExpand } from '../shadcn/expandable-card';
import { projectsData } from '@/lib/projects';

export default function Projects() {
  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-100 font-sans">
        Featured Work.
      </h2>
      <ProjectsExpand projects={projectsData} />
    </section>
  );
}
