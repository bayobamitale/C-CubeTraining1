//Write a fxtn that asks for a series of number from the user and sum all the numbers and alert the result.
function addNumbers()
{
	var SUM = 0;
	do
	{
		inputNumber = parseInt(prompt("Please input the number(s) you intend to add together"));
		SUM += inputNumber;
		answer = (prompt("Do you want to add another number? Answer yes or no")).toLowerCase();		
	}while(answer=="yes");
	
	alert(`Sum of number(s) = ${SUM}`);
}