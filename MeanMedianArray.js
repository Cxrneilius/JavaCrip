/*  Corey Mumford
    01/22/2025
    INFO465
*/

//Program to calculate the mean and median of a list of integers

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = [];

console.log("Enter integers one by one. Type 'q' to quit.");

function getInput() {
    rl.question("Enter an integer (or 'q' to quit): ", (input) => {
        if (input.toLowerCase() === 'q') {
            if (numbers.length === 0) {
                console.log("No numbers entered. Exiting program.");
                rl.close();
                return;
            }

            const mean = calculateMean(numbers);
            const median = calculateMedian(numbers);

            console.log(`Mean: ${mean}`);
            console.log(`Median: ${median}`);
            rl.close();
        } else {
            const parsedInput = parseInt(input, 10);
            if (!isNaN(parsedInput)) {
                numbers.push(parsedInput);
                getInput();
            } else {
                console.log("Invalid input. Please enter a valid integer.");
                getInput();
            }
        }
    });
}
1

// Functions to calculate mean and median
function calculateMean(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}

function calculateMedian(numbers) {
    numbers.sort((a, b) => a - b);
    const midIndex = Math.floor(numbers.length / 2);
    return numbers.length % 2 === 0
        ? (numbers[midIndex - 1] + numbers[midIndex]) / 2
        : numbers[midIndex];
}

getInput();
