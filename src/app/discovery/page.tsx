import React from 'react';

export default function DiscoveryPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#c9d1d9]">Discovery</h1>
      <div className="max-w-3xl mx-auto">
        {/* Search */}
        <div className="relative mb-10">
            <input 
                type="text" 
                placeholder="Search topics, repos, issues like 'all bugs related to login'..." 
                className="w-full p-4 pl-5 text-[#c9d1d9] border border-[#30363d] rounded-lg bg-[#0d1117] focus:ring-[#58a6ff] focus:border-[#58a6ff] shadow-sm text-lg"
            />
            <div className="absolute right-3 top-4 text-[#8b949e]">
                🔍
            </div>
        </div>

        {/* Categories / Topic Clusters */}
        <div className="bg-[#161b22] p-6 rounded-lg border border-[#30363d] shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-[#c9d1d9]">Topic Clusters</h2>
            <div className="flex flex-wrap gap-3">
                {['Machine Learning', 'Blockchain', 'Web Development', 'Security', 'Documentation', 'Design', 'Python', 'React', 'Go', 'Education'].map((topic) => (
                    <span key={topic} className="px-3 py-1 bg-[rgba(56,139,253,0.15)] text-[#58a6ff] rounded-full text-sm font-medium hover:bg-[rgba(56,139,253,0.25)] cursor-pointer border border-[rgba(56,139,253,0.3)]">
                        {topic}
                    </span>
                ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
                 <div className="p-4 bg-[#0d1117] rounded border border-[#30363d]">
                    <h3 className="font-semibold text-[#c9d1d9]">Trending Today</h3>
                    <ul className="mt-2 text-sm space-y-1 text-[#8b949e]">
                        <li>• AI integration in projects</li>
                        <li>• Security patches</li>
                    </ul>
                 </div>
                 <div className="p-4 bg-[#0d1117] rounded border border-[#30363d]">
                    <h3 className="font-semibold text-[#c9d1d9]">Needs Help</h3>
                    <ul className="mt-2 text-sm space-y-1 text-[#8b949e]">
                        <li>• Documentation for API</li>
                        <li>• Unit tests for new modules</li>
                    </ul>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
}
