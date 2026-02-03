import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import QuestionAccordion from "./components/QuestionAccordion";
import { dataStructures, dataStructureNames } from "./data/binaryTreesData";

const App = () => {
  const [activeDataStructure, setActiveDataStructure] = useState(
    dataStructureNames[0],
  );
  const [activeCategory, setActiveCategory] = useState(
    dataStructures[dataStructureNames[0]].categories[0],
  );
  const [questionStatus, setQuestionStatus] = useState({});

  // Update active category when data structure changes
  useEffect(() => {
    setActiveCategory(dataStructures[activeDataStructure].categories[0]);
  }, [activeDataStructure]);

  // Load status from localStorage on mount
  useEffect(() => {
    const savedStatus = localStorage.getItem("dsa-question-status");
    if (savedStatus) {
      setQuestionStatus(JSON.parse(savedStatus));
    }
  }, []);

  // Save status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("dsa-question-status", JSON.stringify(questionStatus));
  }, [questionStatus]);

  const handleStatusChange = (questionId, status) => {
    setQuestionStatus((prev) => ({
      ...prev,
      [questionId]: status,
    }));
  };

  const currentDataStructure = dataStructures[activeDataStructure];
  const filteredQuestions = currentDataStructure.questions.filter(
    (q) => q.category === activeCategory,
  );

  // Calculate stats for current data structure
  const allQuestions = currentDataStructure.questions;
  const stats = {
    total: allQuestions.length,
    done: allQuestions.filter((q) => questionStatus[q.id] === "done").length,
    revise: allQuestions.filter((q) => questionStatus[q.id] === "revise")
      .length,
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            DSA Learning Platform
          </h1>
          <p className="text-gray-400">
            Track your progress on Data Structures & Algorithms
          </p>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-zinc-900 p-4 rounded-lg shadow-lg border border-zinc-800">
            <div className="text-2xl font-bold text-white">{stats.total}</div>
            <div className="text-sm text-gray-400">Total Questions</div>
          </div>
          <div className="bg-zinc-900 p-4 rounded-lg shadow-lg border border-zinc-800">
            <div className="text-2xl font-bold text-green-500">
              {stats.done}
            </div>
            <div className="text-sm text-gray-400">Completed</div>
          </div>
          <div className="bg-zinc-900 p-4 rounded-lg shadow-lg border border-zinc-800">
            <div className="text-2xl font-bold text-yellow-500">
              {stats.revise}
            </div>
            <div className="text-sm text-gray-400">To Revise</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-zinc-900 rounded-lg shadow-lg p-6 border border-zinc-800">
          {/* Data Structure Level Tabs */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              Data Structures
            </h2>
            <Tabs
              categories={dataStructureNames}
              activeTab={activeDataStructure}
              onTabChange={setActiveDataStructure}
            />
          </div>

          {/* Category Level Tabs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Categories
            </h3>
            <Tabs
              categories={currentDataStructure.categories}
              activeTab={activeCategory}
              onTabChange={setActiveCategory}
            />
          </div>

          <div className="space-y-3">
            {filteredQuestions.map((question) => (
              <QuestionAccordion
                key={question.id}
                question={question}
                status={questionStatus[question.id]}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              No questions available in this category yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
