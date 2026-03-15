export const sortingData = [
  {
    id: 912,
    title: "Sort an Array",
    category: "Merge Sort",
    leetcodeLink: "https://leetcode.com/problems/sort-an-array/",
    hint: "Use Merge Sort or Quick Sort for O(n log n) time",
    algorithm: [
      "Merge Sort approach:",
      "mergeSort(arr, left, right):",
      "  - If left >= right, return",
      "  - mid = (left + right) / 2",
      "  - mergeSort(arr, left, mid)",
      "  - mergeSort(arr, mid + 1, right)",
      "  - merge(arr, left, mid, right)",
      "merge(arr, left, mid, right):",
      "  - Create temp arrays for left and right halves",
      "  - Copy data to temp arrays",
      "  - Merge temp arrays back into arr[left..right]",
      "  - Use two pointers to compare and merge",
      "Alternative: Heap Sort or Quick Sort with randomization",
    ],
  },
];

export const categories = ["Merge Sort"];

export const dataStructures = {
  Sorting: {
    categories: categories,
    questions: sortingData,
  },
};

export const dataStructureNames = Object.keys(dataStructures);
