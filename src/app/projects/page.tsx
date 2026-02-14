import React from 'react';
import Link from 'next/link';

const projects = [
  { id: 'org-explorer', name: 'AOSSIE/OrgExplorer', desc: 'Organization Explorer application', issues: 5, prs: 2, lastActive: '1 hr ago' },
  { id: 'mind-the-gap', name: 'AOSSIE/MindTheGap', desc: 'Knowledge graph creation tool', issues: 12, prs: 4, lastActive: '2 days ago' },
  { id: 'agora', name: 'AOSSIE/Agora-Blockchain', desc: 'Electronic voting system', issues: 0, prs: 1, lastActive: '1 week ago' },
  { id: 'carbon', name: 'AOSSIE/CarbonFootprint', desc: 'Track your emissions', issues: 8, prs: 3, lastActive: '3 days ago' },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#c9d1d9]">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#161b22] border border-[#30363d] rounded-md shadow-sm p-5 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
                 <Link href={`/repo/${project.name.split('/')[1]}`} className="font-semibold text-[#58a6ff] hover:underline text-lg">
                    {project.name}
                 </Link>
                 <span className="text-xs text-[#8b949e] bg-[#21262d] px-2 py-1 rounded-full border border-[#30363d]">Active</span>
            </div>
            <p className="text-sm text-[#8b949e] mb-4 h-10 line-clamp-2">{project.desc}</p>
            <div className="text-xs text-[#8b949e] space-y-1 mb-4">
                <p>Last activity: {project.lastActive}</p>
                <div className="flex gap-3 mt-2">
                    <span className="flex items-center gap-1">🐞 {project.issues} Issues</span>
                    <span className="flex items-center gap-1">🔄 {project.prs} PRs</span>
                </div>
            </div>
            <div className="border-t border-[#30363d] pt-3 flex -space-x-1 overflow-hidden">
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0d1117] bg-[#30363d]"></div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0d1117] bg-[#484f58]"></div>
                <div className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0d1117] bg-[#6e7681]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
