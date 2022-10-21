//write a fxtn that loops through a set of numbers and multiply each by 10 and then sum the result and print out.
function sumOfProducts()
{
	var arrayNumbers = [4, 3, 2, 5, 6];
	var SUM = 0;
	
	for(var number in arrayNumbers)
	{
		SUM = SUM + (10 * arrayNumbers[number]);
	}
	
	alert(SUM);
}