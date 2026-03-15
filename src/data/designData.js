export const designData = [
  {
    id: 729,
    title: "My Calendar I",
    category: "Interval Management",
    leetcodeLink: "https://leetcode.com/problems/my-calendar-i/",
    hint: "Store intervals and check for overlap before adding",
    algorithm: [
      "Constructor:",
      "  - Initialize list to store bookings",
      "book(start, end):",
      "  - Loop through all existing bookings:",
      "    - If new interval overlaps with existing:",
      "      - Check: start < existing.end && end > existing.start",
      "      - Return false (double booking)",
      "  - If no overlap, add [start, end] to bookings",
      "  - Return true",
    ],
  },
  {
    id: 1603,
    title: "Design Parking System",
    category: "Simple Data Structure",
    leetcodeLink: "https://leetcode.com/problems/design-parking-system/",
    hint: "Track available slots for each car type",
    algorithm: [
      "Constructor(big, medium, small):",
      "  - Store counts: this.big = big",
      "  - this.medium = medium",
      "  - this.small = small",
      "addCar(carType):",
      "  - If carType == 1 and big > 0:",
      "    - Decrement big, return true",
      "  - Else if carType == 2 and medium > 0:",
      "    - Decrement medium, return true",
      "  - Else if carType == 3 and small > 0:",
      "    - Decrement small, return true",
      "  - Return false",
    ],
  },
];

export const categories = ["Interval Management", "Simple Data Structure"];

export const dataStructures = {
  Design: {
    categories: categories,
    questions: designData,
  },
};

export const dataStructureNames = Object.keys(dataStructures);
