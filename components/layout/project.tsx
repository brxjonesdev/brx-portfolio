import React from 'react';
import { Link2 } from 'lucide-react';
import Link from 'next/link';

export default function Project({ name, description, technologies, link }) {
  return (
    <div className="group">
      <Link
        href={link}
        className="block space-y-4 p-6 rounded-lg hover:bg-cyan-400/5 transition-colors"
      >
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-semibold text-gray-100 font-sans">
            {name}
          </h3>
          <Link2 className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="text-sm text-gray-400">{tech}</span>
              {index < technologies.length - 1 && (
                <span className="text-sm text-gray-400">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </Link>
    </div>
  );
}
