import React from 'react';
import { mentions } from './dummyData';

const Mentions = () => {
  return (
    <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-4 border-b border-[#30363d] pb-2 text-[#c9d1d9]">Mentions</h2>
      <div className="space-y-3">
        {mentions.map((mention) => (
          <div key={mention.id} className={`p-3 border rounded-md hover:bg-[#21262d] cursor-pointer ${mention.status === 'unread' ? 'border-[#1f6feb] bg-[rgba(56,139,253,0.15)]' : 'border-[#30363d]'}`}>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs px-2 py-0.5 rounded-full ${mention.platform === 'GitHub' ? 'bg-[#24292f] text-white' : 'bg-[#5865F2] text-white'}`}>
                  {mention.platform}
                </span>
                <span className="text-xs font-medium text-[#8b949e]">@{mention.author}</span>
              </div>
              <span className="text-xs text-[#8b949e]">{mention.time}</span>
            </div>
            <h3 className="text-sm font-semibold text-[#c9d1d9]">{mention.title}</h3>
            <p className="text-xs text-[#8b949e] mt-1 capitalize">{mention.type} • {mention.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentions;
