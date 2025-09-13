import React from "react";
import { Link } from "lucide-react";

const LinksCard = ({ cardLinks, className }) => {
  return (
    <div
      className={`border-[2px] border-[#2A2B31] rounded-lg bg-[#1C1D22] p-4 space-y-4 text-gray-300 ${className}`}
    >
      <h3 className="text-gray-300 text-lg pb-4">Links</h3>
      <div className="space-y-4">
        <div className="mb-2">
          <span className="block">LinkedIn Profile</span>
          <div className="inline-flex items-center bg-gray-600/50 rounded-full px-2">
            <Link size={16} />
            {cardLinks.linkedin}
          </div>
        </div>

        <div>
          <span className="block">LinkedIn Profile</span>
          <div className="inline-flex items-center bg-gray-600/50 rounded-full px-2">
            <Link size={16} />
            {cardLinks.cv}
          </div>
        </div>

        <div>
          <span className="block">Top 3 Portfolios</span>
          <div>
            {cardLinks.portfolios.map((link) => (
              <div className="inline-flex flex-col mb-3">
                <div
                  key={link}
                  className="inline-flex items-center bg-gray-600/50 rounded-full px-2"
                >
                  <Link size={16} />
                  {link}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <span className="block">Top 3 Articles</span>
          <div>
            {cardLinks.articles.map((link) => (
              <div className="inline-flex flex-col mb-3">
                <div
                  key={link}
                  className="inline-flex items-center bg-gray-600/50 rounded-full px-2"
                >
                  <Link size={16} />
                  {link}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksCard;
