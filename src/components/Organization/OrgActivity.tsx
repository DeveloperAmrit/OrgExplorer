import React from 'react';

const OrgActivity = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#c9d1d9]">Recent Organization Issues</h2>
                <ul className="space-y-2 text-sm text-[#8b949e]">
                    <li className="p-2 border-b border-[#30363d]">Issue #101 in Repo A</li>
                    <li className="p-2 border-b border-[#30363d]">Issue #204 in Repo B</li>
                    <li className="p-2 border-b border-[#30363d]">Issue #55 in Repo C</li>
                </ul>
            </div>
             <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#c9d1d9]">Recent Organization PRs</h2>
                <ul className="space-y-2 text-sm text-[#8b949e]">
                    <li className="p-2 border-b border-[#30363d]">PR #12 merged in Repo A</li>
                    <li className="p-2 border-b border-[#30363d]">PR #45 opened in Repo B</li>
                    <li className="p-2 border-b border-[#30363d]">PR #3 closed in Repo C</li>
                </ul>
            </div>
        </div>
    )
}

export default OrgActivity;
