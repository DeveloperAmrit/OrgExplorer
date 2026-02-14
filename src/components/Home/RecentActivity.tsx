import React from 'react';
import { recentActivity } from './dummyData';

const RecentActivity = () => {
  return (
    <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-4 border-b border-[#30363d] pb-2 text-[#c9d1d9]">Recent Activity</h2>
      <div className="space-y-4">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex gap-3 text-sm">
            <div className="mt-1">
               {/* Icon placeholder */}
               <div className="w-8 h-8 rounded-full bg-[#21262d] flex items-center justify-center text-[#8b949e]">
                  ⚡
               </div>
            </div>
            <div>
              <p className="text-[#c9d1d9]">
                <span className="font-semibold">{activity.type.replace('_', ' ')}</span>: {activity.title}
              </p>
              <p className="text-[#8b949e] text-xs">{activity.repo} • {activity.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
