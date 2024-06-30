/**
 * Processes an array of numbers by squaring even numbers and tripling odd numbers.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} - A new array with the processed numbers.
 */
function processArray(arr) {
  return arr.map(num => {
    if (num % 2 === 0) {
      return num ** 2;
    } else {
      return num * 3;
    }
  });
}

/**
 * Formats an array of strings based on the corresponding processed numbers.
 * @param {string[]} strings - The input array of strings.
 * @param {number[]} processedNumbers - The array of processed numbers.
 * @returns {string[]} - A new array with the formatted strings.
 */
function formatArrayStrings(strings, processedNumbers) {
  return strings.map((str, index) => {
    if (processedNumbers[index] % 2 === 0) {
      return str.toUpperCase();
    } else {
      return str.toLowerCase();
    }
  });
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const processedNumbers = processArray(numbers);
const strings = ["APPLE", "BANANA", "CHERRY", "DATE", "ELDERBERRY"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log("Input array:", numbers);
console.log("Processed array:", processedNumbers);
console.log("Input strings:", strings);
console.log("Formatted strings:", formattedStrings);