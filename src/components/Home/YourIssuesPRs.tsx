import React from 'react';
import { issues, prs } from './dummyData';

const YourIssuesPRs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Issues */}
      <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm">
        <div className="flex justify-between items-center mb-4 border-b border-[#30363d] pb-2">
            <h2 className="text-lg font-semibold text-[#c9d1d9]">Your Issues</h2>
            <button className="text-xs text-[#58a6ff] hover:underline">Filter</button>
        </div>
        <div className="space-y-3">
          {issues.map((issue) => (
            <div key={issue.id} className="flex flex-col gap-1 border-b last:border-0 pb-2 last:pb-0 border-[#30363d]">
               <div className="flex justify-between">
                   <span className="text-sm font-medium hover:text-[#58a6ff] cursor-pointer text-[#c9d1d9]">{issue.repo}</span>
                   <span className={`text-xs px-2 py-0.5 rounded-full ${issue.status === 'open' ? 'bg-[rgba(46,160,67,0.15)] text-[#3fb950]' : 'bg-[rgba(219,97,162,0.15)] text-[#d2a8ff]'}`}>{issue.status}</span>
               </div>
               <p className="text-sm text-[#c9d1d9]">{issue.title}</p>
               <p className="text-xs text-[#8b949e]">Updated {issue.assigned}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-2 border-t border-[#30363d] text-center">
            <a href="#" className="text-xs text-[#8b949e] hover:text-[#58a6ff]">View all issues</a>
        </div>
      </div>

      {/* PRs */}
      <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm">
        <div className="flex justify-between items-center mb-4 border-b border-[#30363d] pb-2">
            <h2 className="text-lg font-semibold text-[#c9d1d9]">Your PRs</h2>
             <div className="flex gap-2">
                <button className="text-xs text-[#58a6ff] hover:underline">Export</button>
                <button className="text-xs text-[#58a6ff] hover:underline">Filter</button>
             </div>
        </div>
        <div className="space-y-3">
          {prs.map((pr) => (
            <div key={pr.id} className="flex flex-col gap-1 border-b last:border-0 pb-2 last:pb-0 border-[#30363d]">
               <div className="flex justify-between">
                   <span className="text-sm font-medium hover:text-[#58a6ff] cursor-pointer text-[#c9d1d9]">{pr.repo}</span>
                   <span className={`text-xs px-2 py-0.5 rounded-full ${pr.status === 'open' ? 'bg-[rgba(46,160,67,0.15)] text-[#3fb950]' : 'bg-[rgba(219,97,162,0.15)] text-[#d2a8ff]'}`}>{pr.status}</span>
               </div>
               <p className="text-sm text-[#c9d1d9]">{pr.title}</p>
               <p className="text-xs text-[#8b949e]">Opened {pr.created}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-2 border-t border-[#30363d] text-center">
             <a href="#" className="text-xs text-[#8b949e] hover:text-[#58a6ff]">View all PRs</a>
        </div>
      </div>
    </div>
  );
};

export default YourIssuesPRs;
