import React from 'react';
import UserHeatMap from "@/components/Home/UserHeatMap";
import RecentActivity from "@/components/Home/RecentActivity";
import Mentions from "@/components/Home/Mentions";
import YourIssuesPRs from "@/components/Home/YourIssuesPRs";
import MaintainerActivity from "@/components/Home/MaintainerActivity";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Recent Activity */}
      <RecentActivity />

      {/* 2. Mentions | Maintainer activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Mentions />
        <MaintainerActivity />
      </div>

      {/* 3. Your Issues | Your PRs */}
      <YourIssuesPRs />

      {/* 4. User heat map */}
      <UserHeatMap />
    </div>
  );
}
