import React from 'react';
import { Link2 } from 'lucide-react';
import Link from 'next/link';

export default function Project({ name, description, technologies, link }:{
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
