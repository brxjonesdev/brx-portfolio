import React from 'react';
import Role from './role'; // Import the Role component
import experienceData from '@/app/content/experience.json'; // Import the JSON file

export default function Experience() {
  return (
    <section id="experience" className="space-y-12">
      {experienceData.map((role, index) => (
        <Role
          key={index}
          duration={role.duration}
          title={role.title}
          description={role.description}
          skills={role.skills}
          works={role.notable_works || []}
        />
      ))}
    </section>
  );
}
