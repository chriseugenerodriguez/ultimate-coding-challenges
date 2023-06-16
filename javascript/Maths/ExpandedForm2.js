const ExpandedForm2 = (n) =>
  n
    .toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter((a) => a > 0)
    .reverse()
    .join("+");

// https://github.com/sameem420/50DaysOfJS/blob/main/Day%2024%20-%20Challenge/24thChallenge.js