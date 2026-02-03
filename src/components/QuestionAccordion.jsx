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
    <div className="border border-zinc-700 rounded-lg mb-3 overflow-hidden">
      <div
        className={`p-4 cursor-pointer hover:bg-zinc-800 transition-colors ${
          isDone
            ? "bg-green-900/30"
            : isRevise
              ? "bg-yellow-900/30"
              : "bg-zinc-900"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 flex-1">
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
            <h3 className="font-medium text-white">{question.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDone}
              className={`p-2 rounded-full transition-all ${
                isDone
                  ? "bg-green-600 text-white"
                  : "bg-zinc-800 text-gray-400 hover:bg-green-900/50"
              }`}
              title="Mark as done"
            >
              <Check className="w-4 h-4" />
            </button>
            <button
              onClick={handleRevise}
              className={`p-2 rounded-full transition-all ${
                isRevise
                  ? "bg-yellow-600 text-white"
                  : "bg-zinc-800 text-gray-400 hover:bg-yellow-900/50"
              }`}
              title="Mark for revision"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <a
              href={question.leetcodeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              title="Open in LeetCode"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="p-4 bg-black border-t border-zinc-700">
          {question.note && (
            <div className="mb-4 p-3 bg-blue-950/50 border-l-4 border-blue-500 rounded">
              <p className="text-sm text-blue-300">
                <span className="font-semibold">Note:</span> {question.note}
              </p>
            </div>
          )}

          {question.hint && (
            <div className="mb-4 p-3 bg-purple-950/50 border-l-4 border-purple-500 rounded">
              <p className="text-sm text-purple-300">
                <span className="font-semibold">Hint:</span> {question.hint}
              </p>
            </div>
          )}

          {question.algorithm && question.algorithm.length > 0 && (
            <div>
              <h4 className="font-semibold text-white mb-2">Algorithm:</h4>
              <div className="bg-zinc-950 p-4 rounded border border-zinc-800">
                <pre className="text-sm text-gray-300 whitespace-pre-wrap font-mono">
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
