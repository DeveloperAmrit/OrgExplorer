import React from 'react';

export default async function RepoPage({ params }: { params: Promise<{ repoId: string }> }) {
  const { repoId } = await params;
  return (
    <div>
      <div className="mb-6 border-b border-[#30363d] pb-4">
          <div className="flex items-center gap-2 mb-2 text-sm text-[#8b949e]">
             <span>AOSSIE</span>
             <span>/</span>
             <span className="font-bold text-[#c9d1d9] text-lg">{repoId}</span>
             <span className="px-2 py-0.5 rounded-full border border-[#30363d] text-xs text-[#8b949e]">Public</span>
          </div>
          <div className="flex space-x-6 text-sm mt-4 text-[#c9d1d9]">
              <span className="font-semibold border-b-2 border-[#f78166] pb-4 -mb-4 cursor-pointer">Code</span>
              <span className="hover:text-[#8b949e] cursor-pointer">Issues <span className="bg-[rgba(110,118,129,0.4)] px-1.5 py-0.5 rounded-full text-xs text-[#c9d1d9] border border-transparent">12</span></span>
              <span className="hover:text-[#8b949e] cursor-pointer">Pull Requests <span className="bg-[rgba(110,118,129,0.4)] px-1.5 py-0.5 rounded-full text-xs text-[#c9d1d9] border border-transparent">4</span></span>
              <span className="hover:text-[#8b949e] cursor-pointer">Actions</span>
              <span className="hover:text-[#8b949e] cursor-pointer">Security</span>
              <span className="hover:text-[#8b949e] cursor-pointer">Insights</span>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
               <div className="bg-[#161b22] border border-[#30363d] rounded-md mb-4 p-4 text-center py-10 text-[#8b949e]">
                   File Explorer / Source Code View
               </div>
               <div className="bg-[#161b22] border border-[#30363d] rounded-md">
                   <div className="p-3 bg-[#161b22] border-b border-[#30363d] font-mono text-sm text-[#c9d1d9]">README.md</div>
                   <div className="p-6 prose prose-invert max-w-none text-[#c9d1d9]">
                       <h1 className="text-[#c9d1d9]">{repoId}</h1>
                       <p>This is a placeholder for the repository README content.</p>
                   </div>
               </div>
          </div>
          <div>
              <div className="mb-6">
                  <h3 className="font-semibold mb-2 text-[#c9d1d9]">About</h3>
                  <p className="text-sm text-[#8b949e] mb-4">Description of the {repoId} repository goes here.</p>
                  <div className="space-y-2 text-sm text-[#8b949e]">
                      <div className="flex items-center gap-2">🔗 <a href="#" className="text-[#58a6ff] hover:underline">homepage.com</a></div>
                      <div className="flex items-center gap-2">⭐ 123 stars</div>
                      <div className="flex items-center gap-2">👁️ 15 watching</div>
                      <div className="flex items-center gap-2">🍴 45 forks</div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
