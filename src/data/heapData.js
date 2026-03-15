export const heapData = [
  {
    id: 23,
    title: "Merge k Sorted Lists",
    category: "Min Heap",
    leetcodeLink: "https://leetcode.com/problems/merge-k-sorted-lists/",
    hint: "Use min heap to always get the smallest element among k lists",
    algorithm: [
      "Create a min heap (PriorityQueue)",
      "Add first node of each list to heap",
      "Create dummy node for result",
      "While heap is not empty:",
      "  - Remove minimum node from heap",
      "  - Add it to result list",
      "  - If removed node has next:",
      "    - Add next node to heap",
      "Return dummy.next",
    ],
  },
  {
    id: 2558,
    title: "Take Gifts From the Richest Pile",
    category: "Max Heap",
    leetcodeLink:
      "https://leetcode.com/problems/take-gifts-from-the-richest-pile/",
    hint: "Use max heap to always pick the largest pile",
    algorithm: [
      "Create a max heap (PriorityQueue with reverse order)",
      "Add all piles to heap",
      "Loop k times:",
      "  - Remove maximum pile from heap",
      "  - Calculate remaining = floor(sqrt(pile))",
      "  - Add remaining back to heap",
      "Sum all elements in heap",
      "Return sum",
    ],
  },
];

export const categories = ["Min Heap", "Max Heap"];

export const dataStructures = {
  "Heap / Priority Queue": {
    categories: categories,
    questions: heapData,
  },
};

export const dataStructureNames = Object.keys(dataStructures);
