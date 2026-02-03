import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Tabs = ({ categories, activeTab, onTabChange }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-b border-zinc-700 mb-6">
      {/* Active Tab Display with Expand/Collapse Button */}
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() => onTabChange(activeTab)}
          className="px-4 py-2 font-medium text-sm rounded-lg bg-blue-600 text-white"
        >
          {activeTab}
        </button>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 rounded-lg bg-zinc-800 text-gray-300 hover:bg-zinc-700 transition-colors"
          title={isExpanded ? "Collapse" : "Expand"}
        >
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Expandable Tabs Grid */}
      {isExpanded && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                onTabChange(category);
                setIsExpanded(false);
              }}
              className={`px-4 py-2 font-medium text-sm rounded-lg transition-colors ${
                activeTab === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-800 text-gray-300 hover:bg-zinc-700"
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
