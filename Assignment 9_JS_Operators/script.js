
function ADD()
{
	let firstNumber = parseFloat(document.getElementById("firstNo").value);
	let secondNumber = parseFloat(document.getElementById("secondNo").value);
	let sum = firstNumber + secondNumber;
	document.getElementById("result").value = sum;
}

function SUBTRACT()
{
	let firstNumber = parseFloat(document.getElementById("subtractFirstNo").value);
	let secondNumber = parseFloat(document.getElementById("subtractSecondNo").value);
	let difference = firstNumber - secondNumber;
	document.getElementById("subtractResult").value = difference;
}

function MULTIPLY()
{
	let firstNumber = parseFloat(document.getElementById("multiplyFirstNo").value);
	let secondNumber = parseFloat(document.getElementById("multiplySecondNo").value);
	let product = firstNumber * secondNumber;
	document.getElementById("multiplyResult").value = product;
}

function DIVISION()
{
	let firstNumber = parseFloat(document.getElementById("divisionFirstNo").value);
	let secondNumber = parseFloat(document.getElementById("divisionSecondNo").value);
	let division = firstNumber / secondNumber;
	document.getElementById("divisionResult").value = division;
}

function MODULUS()
{
	let firstNumber = parseFloat(document.getElementById("modulusFirstNo").value);
	let secondNumber = parseFloat(document.getElementById("modulusSecondNo").value);
	let remainder = firstNumber % secondNumber;
	document.getElementById("modulusResult").value = remainder;
}

function EQUALITY()
{
	let firstNumber = parseFloat(document.getElementById("equalFirstNo").value);
	let secondNumber = parseFloat(document.getElementById("equalSecondNo").value);
	let equal = firstNumber == secondNumber;
	document.getElementById("equalResult").value = equal;
}

function NOT_EQUALITY()
{
	let firstNumber = parseFloat(document.getElementById("notequalFirstNo").value);
	let secondNumber = parseFloat(document.getElementById("notequalSecondNo").value);
	let notEqual = firstNumber != secondNumber;
	document.getElementById("notequalResult").value = notEqual;
}

function COMPARE()
{
	let firstNumber = parseFloat(document.getElementById("compareFirstNo").value);
	let secondNumber = parseFloat(document.getElementById("compareSecondNo").value);
	if(firstNumber > secondNumber)
	{
		document.getElementById("compareResult").value = "True";
	}
	else if(firstNumber < secondNumber)
	{
		document.getElementById("compareResult").value = "False";
	}
}