import React from 'react';

const StatCard = ({ title, count, type }: { title: string, count: number, type: 'good' | 'bad' | 'neutral' }) => (
    <div className={`p-4 border rounded-md bg-[#161b22] shadow-sm ${type === 'bad' ? 'border-l-4 border-l-[#f85149] border-[#30363d]' : type === 'good' ? 'border-l-4 border-l-[#3fb950] border-[#30363d]' : 'border-l-4 border-l-[#8b949e] border-[#30363d]'}`}>
        <h3 className="text-sm font-medium text-[#8b949e]">{title}</h3>
        <p className="text-2xl font-bold mt-1 text-[#c9d1d9]">{count}</p>
    </div>
);

export default function GovernancePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#c9d1d9]">Governance Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Dead Issues (> 6 months)" count={12} type="bad" />
        <StatCard title="Zombie PRs (> 3 months)" count={5} type="bad" />
        <StatCard title="Healthy Repos" count={8} type="good" />
        <StatCard title="Pending Audits" count={2} type="neutral" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Risk Analysis */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-md p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-[#f85149]">Risky Dependencies (Contributor Bus Factor)</h2>
            <div className="space-y-4">
                <div className="p-3 bg-[rgba(248,81,73,0.1)] border border-[rgba(248,81,73,0.4)] rounded">
                    <p className="font-medium text-[#f85149]">AOSSIE/CriticalLib</p>
                    <p className="text-sm text-[#ff7b72] mt-1">90% of commits by 1 contributor in last 3 months.</p>
                </div>
                <div className="p-3 bg-[rgba(187,128,9,0.15)] border border-[rgba(187,128,9,0.4)] rounded">
                    <p className="font-medium text-[#d29922]">AOSSIE/OldTool</p>
                    <p className="text-sm text-[#d29922] mt-1">No activity for 4 months.</p>
                </div>
            </div>
        </div>

        {/* License & Security */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-md p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-[#c9d1d9]">License & Security Audit</h2>
             <div className="space-y-2">
                 <div className="flex justify-between items-center py-2 border-b border-[#30363d]">
                     <span className="text-sm text-[#8b949e]">MIT License Compliance</span>
                     <span className="text-xs bg-[rgba(46,160,67,0.15)] text-[#3fb950] px-2 py-1 rounded">Passing</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-[#30363d]">
                     <span className="text-sm text-[#8b949e]">Vulnerability Scan (npm audit)</span>
                     <span className="text-xs bg-[rgba(187,128,9,0.15)] text-[#d29922] px-2 py-1 rounded">3 Low</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-[#30363d]">
                     <span className="text-sm text-[#8b949e]">Code Owners Configured</span>
                     <span className="text-xs bg-[rgba(248,81,73,0.1)] text-[#f85149] px-2 py-1 rounded">Incomplete</span>
                 </div>
             </div>
        </div>
      </div>
    </div>
  );
}
