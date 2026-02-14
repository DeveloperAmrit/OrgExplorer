import React from 'react';

export default function ProfilePage() {
  return (
    <div className="max-w-3xl mx-auto">
       <div className="bg-[#161b22] border border-[#30363d] rounded-md shadow-sm overflow-hidden mb-6">
           <div className="h-32 bg-[#21262d]"></div>
           <div className="px-6 pb-6">
                <div className="relative -mt-12 mb-4">
                    <div className="w-24 h-24 bg-[#161b22] rounded-full p-1 shadow-md">
                        <div className="w-full h-full bg-[#30363d] rounded-full flex items-center justify-center text-[#c9d1d9] font-bold text-2xl border border-[#30363d]">
                             Me
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-[#c9d1d9]">Amrit</h1>
                        <p className="text-[#8b949e]">@amrit_dev</p>
                    </div>
                    <button className="px-4 py-2 border border-[#30363d] rounded-md text-sm font-semibold text-[#c9d1d9] hover:bg-[#21262d]">Edit Profile</button>
                </div>
           </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="bg-[#161b22] border border-[#30363d] rounded-md p-6 shadow-sm">
               <h2 className="text-lg font-semibold mb-4 text-[#c9d1d9]">Role & Settings</h2>
               <div className="mb-4">
                   <label className="block text-sm font-medium text-[#8b949e] mb-1">Current Role</label>
                   <select className="w-full bg-[#0d1117] text-[#c9d1d9] border-[#30363d] rounded-md shadow-sm border p-2">
                       <option>Contributor</option>
                       <option>Maintainer</option>
                       <option>Admin</option>
                   </select>
               </div>
               <div className="mb-4">
                   <label className="block text-sm font-medium text-[#8b949e] mb-1">Email Visibility</label>
                   <select className="w-full bg-[#0d1117] text-[#c9d1d9] border-[#30363d] rounded-md shadow-sm border p-2">
                       <option>Public</option>
                       <option>Private</option>
                   </select>
               </div>
           </div>
           
           <div className="bg-[#161b22] border border-[#30363d] rounded-md p-6 shadow-sm">
               <h2 className="text-lg font-semibold mb-4 text-[#c9d1d9]">Connected Accounts</h2>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-[#0d1117] rounded border border-[#30363d]">
                        <span className="font-medium text-sm text-[#c9d1d9]">GitHub</span>
                        <span className="text-[#3fb950] text-xs font-semibold">Connected</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#0d1117] rounded border border-[#30363d]">
                        <span className="font-medium text-sm text-[#c9d1d9]">Discord</span>
                        <span className="text-[#8b949e] text-xs font-semibold">Connect</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#0d1117] rounded border border-[#30363d]">
                        <span className="font-medium text-sm text-[#c9d1d9]">GitLab</span>
                        <span className="text-[#8b949e] text-xs font-semibold">Connect</span>
                    </div>
                </div>
           </div>
       </div>
    </div>
  );
}
