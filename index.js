let threeNumbers = prompt('Write three numbers using commas between them');

let firstNumber = threeNumbers[0];
let middleNumber = threeNumbers[1];
let lastNumber = threeNumbers[threeNumbers.length -1];

let sumNumbers = +firstNumber + +middleNumber + +lastNumber;

let min;
let max;

if (threeNumbers[0] > threeNumbers[1] && threeNumbers[0] > threeNumbers[2]) {
    max = threeNumbers[0];
} else if (threeNumbers[1] > threeNumbers[0] && threeNumbers[1] > threeNumbers[2]) {
    max = threeNumbers[1];
} else (threeNumbers[2] > threeNumbers[0] && threeNumbers[2] > threeNumbers[1]); {
    max = threeNumbers[2];
}

if (threeNumbers[0] < threeNumbers[1] && threeNumbers[0] < threeNumbers[2]) {
    min = threeNumbers[0];
} else if (threeNumbers[1] < threeNumbers[0] && threeNumbers[1] < threeNumbers[2]) {
    min = threeNumbers[1];
}

alert(`first number is ${firstNumber}, last number is ${lastNumber}.`);
alert(`Пользователь ввел ${firstNumber} + ${middleNumber} + ${lastNumber} = ${sumNumbers}.`);
alert(`min is ${min}, max is ${max}`);

let askQuestion = prompt("Please enter one of the numbers which you entered before?");
if(threeNumbers.indexOf(askQuestion) === -1) {
    alert("Sorry, you did not enter this number!");
} else {
    alert(threeNumbers.indexOf(askQuestion));
}