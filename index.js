let threeNumbers = prompt('Write three numbers using commas between them');

let massiveOfNumber = threeNumbers.split(',');

let firstNumber = massiveOfNumber[0];
let middleNumber = massiveOfNumber[1];
let lastNumber = massiveOfNumber[massiveOfNumber.length -1];

let sumNumbers = +firstNumber + +middleNumber + +lastNumber;

let min;
let max;

if (massiveOfNumber[0] > massiveOfNumber[1] && massiveOfNumber[0] > massiveOfNumber[2]) {
    max = massiveOfNumber[0];
} else if (massiveOfNumber[1] > massiveOfNumber[0] && massiveOfNumber[1] > massiveOfNumber[2]) {
    max = massiveOfNumber[1];
} else (massiveOfNumber[2] > massiveOfNumber[0] && massiveOfNumber[2] > massiveOfNumber[1]); {
    max = massiveOfNumber[2];
}

if (massiveOfNumber[0] < massiveOfNumber[1] && massiveOfNumber[0] < massiveOfNumber[2]) {
    min = massiveOfNumber[0];
} else if (massiveOfNumber[1] < massiveOfNumber[0] && massiveOfNumber[1] < massiveOfNumber[2]) {
    min = massiveOfNumber[1];
} else (massiveOfNumber[2] < massiveOfNumber[0] && massiveOfNumber[2] < massiveOfNumber[1]); {
    min = massiveOfNumber[2];
}

alert(`first number is ${firstNumber}, last number is ${lastNumber}.`);
alert(`Пользователь ввел ${firstNumber} + ${middleNumber} + ${lastNumber} = ${sumNumbers}.`);
alert(`min is ${min}, max is ${max}`);

let askQuestion = prompt("Please enter one of the numbers which you entered before?");
if(massiveOfNumber.indexOf(askQuestion) === -1) {
    alert("Sorry, you did not enter this number!");
} else {
    alert(massiveOfNumber.indexOf(askQuestion));
}