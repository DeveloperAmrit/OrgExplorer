import React from 'react';

const UserHeatMap = () => {
  // varied colors for heatmap
  const getLevel = () => Math.floor(Math.random() * 5);
  // Dark mode colors for GitHub contribution graph
  const colors = ['bg-[#161b22]', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'];

  return (
    <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#c9d1d9]">User Heat Map</h2>
        <div className="flex space-x-2 text-xs">
          <select className="border border-[#30363d] bg-[#0d1117] text-[#c9d1d9] rounded px-2 py-1">
            <option>Issues Created</option>
            <option>PRs Opened</option>
            <option>Issues Assigned</option>
            <option>PRs Merged</option>
          </select>
          <select className="border border-[#30363d] bg-[#0d1117] text-[#c9d1d9] rounded px-2 py-1">
            <option>2026</option>
            <option>2025</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-1 overflow-x-auto">
        {/* Days of week labels could go here */}
        <div className="grid grid-flow-col gap-1 auto-cols-max">
          {Array.from({ length: 53 }).map((_, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-1">
              {Array.from({ length: 7 }).map((_, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`w-3 h-3 ${colors[getLevel()]} rounded-[2px]`}
                  title={`Date: ... Contributions: ...`}
                ></div>
              ))}
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center text-xs text-[#8b949e] mt-2 space-x-1">
          <span>Less</span>
          <div className="w-3 h-3 bg-[#161b22] rounded-[2px]"></div>
          <div className="w-3 h-3 bg-[#0e4429] rounded-[2px]"></div>
          <div className="w-3 h-3 bg-[#006d32] rounded-[2px]"></div>
          <div className="w-3 h-3 bg-[#26a641] rounded-[2px]"></div>
          <div className="w-3 h-3 bg-[#39d353] rounded-[2px]"></div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default UserHeatMap;
