function firstNonRepeatedChar(str) {
  // Create an object to count character occurrences
  const charCount = {};

  // Count each character's frequency
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with only one occurrence
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character found, return null
  return null;
}

// Prompt user input and show result
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
