// JavaScript Document
amicableNumbers();

function amicableNumbers() {
	var numOne = prompt("What is your first number?", 0);
	if (numOne == null) {
		numOne = 0;
	}
	var numTwo = prompt("What is your second number?", 0);
	if (numTwo == null) {
		numTwo = 0;
	}
	var numOneFactors = numberFactors(numOne);
	var numTwoFactors = numberFactors(numTwo);
	var sumNumOne = sumFactors(numOneFactors);
	var sumNumTwo = sumFactors(numTwoFactors);
	if (sumNumOne == numTwo && sumNumTwo == numOne) {
		document.getElementById('amicable').innerHTML = "The numbers: " + numOne + " and " + numTwo + " are amicable";
	} else {
		document.getElementById('amicable').innerHTML = "The numbers: " + numOne + " and " + numTwo + " are not amicable";
	}
	printNumAndFactors(numOne, numOneFactors);
	printNumAndFactors(numTwo, numTwoFactors);
}

function isAFactor(number, possibleFactor) {
	return (number % possibleFactor == 0);
}
function numberFactors(num) {
	var index = 0;
	var numFactors = [];
	for (var i = 1; i < num; i++) {
		if (isAFactor(num, i)) {
			numFactors[index] = i;
			index++;
		}
	}
	return numFactors;
}
function sumFactors(factorArray) {
	var sum = 0;
	for (var i = 0; i < factorArray.length; i++) {
		sum += factorArray[i];
	}
	return sum;
}
function printNumAndFactors(num, factorArray) {
	document.getElementById('factors').innerHTML += num + "'s factors are:";
	for (var i = 0; i < factorArray.length; i++) {
		document.getElementById('factors').innerHTML += " " + factorArray[i];
	}
	document.getElementById('factors').innerHTML += "<br>"
}