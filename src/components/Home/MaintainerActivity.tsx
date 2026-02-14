import React from 'react';

const MaintainerActivity = () => {
    return (
        <div className="bg-[#161b22] p-4 border border-[#30363d] rounded-md shadow-sm">
            <h2 className="text-lg font-semibold mb-4 border-b border-[#30363d] pb-2 text-[#c9d1d9]">Maintainer Activity</h2>
            <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-[#21262d] rounded-md">
                    <p className="text-2xl font-bold text-[#c9d1d9]">12</p>
                    <p className="text-xs text-[#8b949e]">PR Reviews</p>
                </div>
                <div className="p-3 bg-[#21262d] rounded-md">
                    <p className="text-2xl font-bold text-[#c9d1d9]">45</p>
                    <p className="text-xs text-[#8b949e]">Issue Comments</p>
                </div>
            </div>
        </div>
    );
};

export default MaintainerActivity;
