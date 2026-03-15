import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Tabs = ({ categories, activeTab, onTabChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-6">
      {/* Active Tab Display with Expand/Collapse Button */}
      <div className="flex items-center justify-between gap-3 mb-3">
        <button
          onClick={() => onTabChange(activeTab)}
          className="flex-1 px-6 py-3 font-semibold text-sm rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
        >
          {activeTab}
        </button>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-3 rounded-xl bg-zinc-800 text-gray-300 hover:bg-zinc-700 transition-all border border-zinc-700 hover:border-zinc-600"
          title={isExpanded ? "Collapse" : "Show all options"}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expandable Tabs Grid */}
      {isExpanded && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 animate-fadeIn">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                onTabChange(category);
                setIsExpanded(false);
              }}
              className={`px-4 py-3 font-medium text-sm rounded-xl transition-all transform hover:scale-105 ${
                activeTab === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
