export const queueData = [
  {
    id: 232,
    title: "Implement Queue using Stacks",
    category: "Data Structure Design",
    leetcodeLink: "https://leetcode.com/problems/implement-queue-using-stacks/",
    hint: "Use two stacks: input stack and output stack",
    algorithm: [
      "Use two stacks: stack1 (input), stack2 (output)",
      "Push(x):",
      "  - Push x to stack1",
      "Pop():",
      "  - If stack2 is empty:",
      "    - Move all elements from stack1 to stack2",
      "  - Pop from stack2",
      "Peek():",
      "  - If stack2 is empty:",
      "    - Move all elements from stack1 to stack2",
      "  - Return top of stack2",
      "Empty():",
      "  - Return stack1.isEmpty() and stack2.isEmpty()",
    ],
  },
  {
    id: 636,
    title: "Exclusive Time of Functions",
    category: "Stack Simulation",
    leetcodeLink: "https://leetcode.com/problems/exclusive-time-of-functions/",
    hint: "Use stack to track function calls, calculate time differences",
    algorithm: [
      "Create result array of size n, initialized to 0",
      "Create stack to store [functionId, startTime]",
      "Take prevTime = 0",
      "For each log:",
      "  - Parse functionId, type (start/end), timestamp",
      "  - If type is 'start':",
      "    - If stack not empty:",
      "      - Add (timestamp - prevTime) to top function's time",
      "    - Push [functionId, timestamp] to stack",
      "    - prevTime = timestamp",
      "  - Else (type is 'end'):",
      "    - Pop from stack",
      "    - Add (timestamp - prevTime + 1) to popped function's time",
      "    - prevTime = timestamp + 1",
      "Return result",
    ],
  },
];

export const categories = ["Data Structure Design", "Stack Simulation"];

export const dataStructures = {
  Queue: {
    categories: categories,
    questions: queueData,
  },
};

export const dataStructureNames = Object.keys(dataStructures);
