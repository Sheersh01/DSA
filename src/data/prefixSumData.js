export const prefixSumData = [
  {
    id: 303,
    title: "Range Sum Query - Immutable",
    category: "Prefix Sum",
    leetcodeLink: "https://leetcode.com/problems/range-sum-query-immutable/",
    hint: "Build prefix sum array in constructor",
    algorithm: [
      "Constructor:",
      "  - Create prefixSum array of size n+1",
      "  - prefixSum[0] = 0",
      "  - For i from 0 to n-1:",
      "    - prefixSum[i+1] = prefixSum[i] + nums[i]",
      "Query(left, right):",
      "  - Return prefixSum[right+1] - prefixSum[left]",
    ],
  },
  {
    id: 2348,
    title: "Number of Zero-Filled Subarrays",
    category: "Counting Subarrays",
    leetcodeLink:
      "https://leetcode.com/problems/number-of-zero-filled-subarrays/",
    hint: "Count contiguous zeros, use formula n*(n+1)/2",
    algorithm: [
      "Take count = 0, zeroLength = 0",
      "For each num in nums:",
      "  - If num == 0:",
      "    - zeroLength++",
      "  - Else:",
      "    - count += zeroLength * (zeroLength + 1) / 2",
      "    - zeroLength = 0",
      "After loop: count += zeroLength * (zeroLength + 1) / 2",
      "Return count",
    ],
  },
  {
    id: 2540,
    title: "Minimum Common Value",
    category: "Two Pointers",
    leetcodeLink: "https://leetcode.com/problems/minimum-common-value/",
    hint: "Use two pointers on both sorted arrays",
    algorithm: [
      "Take i = 0, j = 0",
      "While i < nums1.length and j < nums2.length:",
      "  - If nums1[i] == nums2[j]:",
      "    - Return nums1[i]",
      "  - Else if nums1[i] < nums2[j]:",
      "    - i++",
      "  - Else:",
      "    - j++",
      "Return -1 (no common value)",
    ],
  },
];

export const categories = ["Prefix Sum", "Counting Subarrays", "Two Pointers"];

export const dataStructures = {
  "Prefix Sum": {
    categories: categories,
    questions: prefixSumData,
  },
};

export const dataStructureNames = Object.keys(dataStructures);
