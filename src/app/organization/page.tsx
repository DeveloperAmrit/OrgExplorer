import React from 'react';
import OrgHeatMap from '@/components/Organization/OrgHeatMap';
import ActiveRepos from '@/components/Organization/ActiveRepos';
import OrgActivity from '@/components/Organization/OrgActivity';

export default function OrganizationPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold mb-6 text-[#c9d1d9]">Organization Overview</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <OrgHeatMap />
            <OrgActivity />
        </div>
        <div>
            <ActiveRepos />
        </div>
      </div>
    </div>
  );
}
