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

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15, 36, 21, 64, 27, 100]