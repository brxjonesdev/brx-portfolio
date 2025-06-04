import React from 'react';


export default function Project({ name}:{
    name: string;
    description: string;
    technologies: string[];
    link: string;
}) {
  return (
    <div className="group">
      <p>
        {name}
      </p>
    </div>
  );
}
