const prompt = require('prompt-sync')();

//Prompt user for input
function getInput() {
    let input;
    let numbers = [];
    while (true) {
        // Exit loop if user enters 'q'
        input = prompt("Enter an integer (or 'q' to quit): ");
        // Trim whitespace and normalize case
        if (input.toLowerCase() === 'q') {
            break;
        }
        let number = parseInt(input);
        //Check if input is a valid number
        if (isNaN(number)) {
            console.log("Error: Please enter a valid integer or 'q' to quit.");
        } else {
            //Store the valid integer in the array
            numbers.push(number);
        }
    }
    return numbers;
}

function checkCondition(numbers) {
    //Iterate through all pairs of numbers
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            // Check if the product of two numbers equals a third number in the list
            for (let k = 0; k < numbers.length; k++) {
                if (k !== i && k !== j && numbers[i] * numbers[j] === numbers[k]) {
                    console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`);
                    return;
                }
            }
        }
    }
    // If no matching condition is found, output a message
    console.log("Condition was not met");
}

function main() {
    let numbers = getInput();
    console.log("You entered: ", numbers);
    checkCondition(numbers);
}

//Start the program
main();