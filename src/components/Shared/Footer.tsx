import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0d1117] border-t border-[#30363d] mt-auto py-8 text-sm text-[#8b949e]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2026 AOSSIE OrgExplorer. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <span className="hover:text-[#58a6ff] cursor-pointer">Terms</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Privacy</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Security</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Status</span>
          <span className="hover:text-[#58a6ff] cursor-pointer">Contact</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;