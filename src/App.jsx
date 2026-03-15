import React, { useState, useEffect } from "react";
import Tabs from "./components/Tabs";
import QuestionAccordion from "./components/QuestionAccordion";
import { BookOpen, CheckCircle2, Clock, Search, X } from "lucide-react";

// Import all data structures
import * as arrayData from "./data/arrayData";
import * as binarySearchData from "./data/binarySearchData";
import * as binaryTreesData from "./data/binaryTreesData";
import * as bitManipulationData from "./data/bitManipulationData";
import * as designData from "./data/designData";
import * as dynamicProgrammingData from "./data/dynamicProgrammingData";
import * as greedyData from "./data/greedyData";
import * as hashTableData from "./data/hashTableData";
import * as heapData from "./data/heapData";
import * as linkedListData from "./data/linkedListData";
import * as mathData from "./data/mathData";
import * as prefixSumData from "./data/prefixSumData";
import * as queueData from "./data/queueData";
import * as simulationData from "./data/simulationData";
import * as slidingWindowData from "./data/slidingWindowData";
import * as sortingData from "./data/sortingData";
import * as stackData from "./data/stackData";
import * as stringData from "./data/stringData";
import * as twoPointersData from "./data/twoPointersData";

// Combine all data structures
const dataStructures = {
  ...arrayData.dataStructures,
  ...binarySearchData.dataStructures,
  ...binaryTreesData.dataStructures,
  ...bitManipulationData.dataStructures,
  ...designData.dataStructures,
  ...dynamicProgrammingData.dataStructures,
  ...greedyData.dataStructures,
  ...hashTableData.dataStructures,
  ...heapData.dataStructures,
  ...linkedListData.dataStructures,
  ...mathData.dataStructures,
  ...prefixSumData.dataStructures,
  ...queueData.dataStructures,
  ...simulationData.dataStructures,
  ...slidingWindowData.dataStructures,
  ...sortingData.dataStructures,
  ...stackData.dataStructures,
  ...stringData.dataStructures,
  ...twoPointersData.dataStructures,
};

const dataStructureNames = Object.keys(dataStructures);

const App = () => {
  const [activeDataStructure, setActiveDataStructure] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const [questionStatus, setQuestionStatus] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // Update active category when data structure changes
  useEffect(() => {
    setActiveCategory("All Questions");
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

  // Get all questions and categories based on active data structure
  const getAllQuestionsAndCategories = () => {
    if (activeDataStructure === "All") {
      const allQuestions = [];
      const allCategories = new Set();

      Object.values(dataStructures).forEach((ds) => {
        allQuestions.push(...ds.questions);
        ds.categories.forEach((cat) => allCategories.add(cat));
      });

      return {
        questions: allQuestions,
        categories: Array.from(allCategories).sort(),
      };
    } else {
      return {
        questions: dataStructures[activeDataStructure].questions,
        categories: dataStructures[activeDataStructure].categories,
      };
    }
  };

  const { questions: currentQuestions, categories: currentCategories } =
    getAllQuestionsAndCategories();

  const filteredQuestions =
    activeCategory === "All Questions"
      ? currentQuestions
      : currentQuestions.filter((q) => q.category === activeCategory);

  // Apply search filter
  const searchedQuestions = searchQuery.trim()
    ? filteredQuestions.filter((q) =>
        q.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredQuestions;

  // Calculate stats
  const stats = {
    total: currentQuestions.length,
    done: currentQuestions.filter((q) => questionStatus[q.id] === "done")
      .length,
    revise: currentQuestions.filter((q) => questionStatus[q.id] === "revise")
      .length,
  };

  const completionPercentage =
    stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl"></div>
            <div className="relative bg-gradient-to-r from-zinc-900/80 to-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 shadow-2xl">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                DSA Learning Platform
              </h1>
              <p className="text-gray-400 text-lg">
                Master Data Structures & Algorithms • Track Your Progress •
                Achieve Your Goals
              </p>
            </div>
          </div>
        </header>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-2xl shadow-xl border border-zinc-800 hover:border-zinc-700 transition-all hover:shadow-2xl transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white">{stats.total}</div>
            </div>
            <div className="text-sm text-gray-400 font-medium">
              Total Questions
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-2xl shadow-xl border border-zinc-800 hover:border-green-900/50 transition-all hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-green-500/10 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-400">
                {stats.done}
              </div>
            </div>
            <div className="text-sm text-gray-400 font-medium">Completed</div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-2xl shadow-xl border border-zinc-800 hover:border-yellow-900/50 transition-all hover:shadow-2xl hover:shadow-yellow-500/10 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className="p-3 bg-yellow-500/10 rounded-xl">
                <Clock className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold text-yellow-400">
                {stats.revise}
              </div>
            </div>
            <div className="text-sm text-gray-400 font-medium">To Revise</div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 rounded-2xl shadow-xl border border-zinc-800 hover:border-purple-900/50 transition-all hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-1">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm text-gray-400 font-medium">Progress</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {completionPercentage}%
              </div>
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-b from-zinc-900/80 to-zinc-900/60 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-zinc-800">
          {/* Data Structure Level Tabs */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></span>
              Data Structures
            </h2>
            <Tabs
              categories={["All", ...dataStructureNames]}
              activeTab={activeDataStructure}
              onTabChange={setActiveDataStructure}
            />
          </div>

          {/* Category Level Tabs */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="w-1.5 h-7 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></span>
              Categories
            </h3>
            <Tabs
              categories={["All Questions", ...currentCategories]}
              activeTab={activeCategory}
              onTabChange={setActiveCategory}
            />
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-12 py-4 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-400">
                Found {searchedQuestions.length} question
                {searchedQuestions.length !== 1 ? "s" : ""} matching "
                {searchQuery}"
              </p>
            )}
          </div>

          <div className="space-y-3">
            {searchedQuestions.map((question) => (
              <QuestionAccordion
                key={question.id}
                question={question}
                status={questionStatus[question.id]}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>

          {searchedQuestions.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-block p-6 bg-zinc-950 rounded-2xl border border-zinc-800 mb-4">
                <Search className="w-12 h-12 text-gray-600 mx-auto" />
              </div>
              <p className="text-gray-400 text-lg">
                {searchQuery
                  ? `No questions found matching "${searchQuery}"`
                  : "No questions available in this category yet."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
