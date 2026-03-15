import React, { useState } from "react";
import { Check, RotateCcw, ChevronDown, ExternalLink } from "lucide-react";

const QuestionAccordion = ({ question, status, onStatusChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isDone = status === "done";
  const isRevise = status === "revise";

  const handleDone = (e) => {
    e.stopPropagation();
    onStatusChange(question.id, isDone ? null : "done");
  };

  const handleRevise = (e) => {
    e.stopPropagation();
    onStatusChange(question.id, isRevise ? null : "revise");
  };

  return (
    <div className="border border-zinc-800 rounded-2xl mb-3 overflow-hidden transition-all hover:border-zinc-700 hover:shadow-xl hover:shadow-zinc-900/50 transform hover:scale-[1.01]">
      <div
        className={`p-6 cursor-pointer transition-all duration-300 ${
          isDone
            ? "bg-gradient-to-r from-green-950/50 to-zinc-900/80 border-l-4 border-green-500"
            : isRevise
              ? "bg-gradient-to-r from-yellow-950/50 to-zinc-900/80 border-l-4 border-yellow-500"
              : "bg-zinc-900/60 hover:bg-zinc-900/80"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all ${
                isOpen
                  ? "bg-blue-500/20 rotate-180"
                  : "bg-zinc-800/50 hover:bg-zinc-800"
              }`}
            >
              <ChevronDown
                className={`w-5 h-5 transition-all duration-300 ${
                  isOpen ? "text-blue-400" : "text-gray-400"
                }`}
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-400 transition-colors">
                {question.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-zinc-800/80 text-gray-400 border border-zinc-700 font-medium">
                  {question.category}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDone}
              className={`p-2.5 rounded-lg transition-all transform hover:scale-110 ${
                isDone
                  ? "bg-green-600 text-white shadow-lg shadow-green-500/50"
                  : "bg-zinc-800 text-gray-400 hover:bg-green-900/50 hover:text-green-400"
              }`}
              title="Mark as done"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={handleRevise}
              className={`p-2.5 rounded-lg transition-all transform hover:scale-110 ${
                isRevise
                  ? "bg-yellow-600 text-white shadow-lg shadow-yellow-500/50"
                  : "bg-zinc-800 text-gray-400 hover:bg-yellow-900/50 hover:text-yellow-400"
              }`}
              title="Mark for revision"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            {question.leetcodeLink && (
              <a
                href={question.leetcodeLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-all transform hover:scale-110 shadow-lg shadow-orange-500/30"
                title="Open in LeetCode"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {question.gfgLink && (
              <a
                href={question.gfgLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2.5 rounded-lg bg-green-700 text-white hover:bg-green-800 transition-all transform hover:scale-110 shadow-lg shadow-green-500/30"
                title="Open in GeeksforGeeks"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="p-8 bg-gradient-to-br from-zinc-950/90 to-black border-t border-zinc-800/50 animate-fadeIn">
          {question.note && (
            <div className="mb-5 p-5 bg-gradient-to-r from-blue-950/70 to-blue-900/40 border-l-4 border-blue-500 rounded-xl shadow-lg backdrop-blur-sm">
              <p className="text-sm text-blue-100 leading-relaxed">
                <span className="font-bold text-blue-300 text-base">
                  💡 Note:
                </span>{" "}
                {question.note}
              </p>
            </div>
          )}

          {question.hint && (
            <div className="mb-5 p-5 bg-gradient-to-r from-purple-950/70 to-purple-900/40 border-l-4 border-purple-500 rounded-xl shadow-lg backdrop-blur-sm">
              <p className="text-sm text-purple-100 leading-relaxed">
                <span className="font-bold text-purple-300 text-base">
                  🎯 Hint:
                </span>{" "}
                {question.hint}
              </p>
            </div>
          )}

          {question.algorithm && question.algorithm.length > 0 && (
            <div>
              <h4 className="font-bold text-white mb-4 text-lg flex items-center gap-3">
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
                Algorithm Steps
              </h4>
              <div className="bg-gradient-to-br from-zinc-950 to-black p-6 rounded-xl border border-zinc-800 shadow-inner">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono leading-loose">
                  {question.algorithm.join("\n")}
                </pre>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionAccordion;
