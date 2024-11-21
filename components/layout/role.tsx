import React from 'react';

export default function Role({ duration, title, description, skills, works }: {
    duration: string;
    title: string;
    description: string;
    skills: string[];
    works: string[];
}) {
  return (
    <div className="border-l-2 border-cyan-400/20 pl-4 space-y-4">
      <div className="flex items-center gap-2 text-cyan-300">
        <span className="text-sm">{duration}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      <p className="text-gray-400">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded"
          >
            {skill}
          </span>
        ))}
        

      </div>
      <div>
        {works && (
          <div>
            <p className='pb-2 font-semibold'>Related Projects</p>
            {works.map((work) => (
          <span
            key={work}
            className="px-3 py-1 bg-cyan-900 text-cyan-300 text-sm rounded"
          >
            {work}
          </span>
        ))}
          </div>
        )}
      </div>
    </div>
  );
}
