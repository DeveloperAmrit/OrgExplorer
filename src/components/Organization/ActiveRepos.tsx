import React from 'react';

const ActiveRepos = () => {
  const repos = [
    { name: 'AOSSIE/OrgExplorer', activity: 'High', issues: 12, prs: 5 },
    { name: 'AOSSIE/MindTheGap', activity: 'Medium', issues: 8, prs: 2 },
    { name: 'AOSSIE/Agora-Blockchain', activity: 'Low', issues: 1, prs: 0 },
  ];

  return (
    <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm mb-6">
      <h2 className="text-lg font-semibold mb-4 text-[#c9d1d9]">Most Active Repositories</h2>
      <div className="space-y-3">
        {repos.map((repo) => (
          <div key={repo.name} className="flex items-center justify-between p-3 border border-[#30363d] rounded hover:bg-[#21262d]">
            <div>
                <h3 className="text-sm font-semibold text-[#58a6ff]">{repo.name}</h3>
                <p className="text-xs text-[#8b949e]">{repo.issues} issues • {repo.prs} PRs these week</p>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${repo.activity === 'High' ? 'bg-[rgba(46,160,67,0.15)] text-[#3fb950]' : 'bg-[#21262d] text-[#8b949e]'}`}>
                {repo.activity} Activity
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveRepos;
