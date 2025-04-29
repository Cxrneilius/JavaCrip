// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Convert to lowercase and remove spaces
    const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
    // Reverse the string
    const reversedStr = cleanedStr.split('').reverse().join('');
    // Check if the original string is equal to the reversed string
    return cleanedStr === reversedStr;
}

// Function to find palindromes in an array
function findPalindromes(arr) {
    // Filter the array to include only palindromes
    return arr.filter(isPalindrome);
}

// Pre-populated array of strings
const inputStrings = ["racecar", "hello", "Level", "I", "world", "mad am", "12321", "not a palindrome"];

// Find palindromes
const palindromes = findPalindromes(inputStrings);

// Display the output
console.log('Palindromes:', palindromes);