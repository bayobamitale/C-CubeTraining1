function GRADE()
{
	if(parseFloat(document.getElementById("score").value) >= 0 && parseFloat(document.getElementById("score").value) < 45)
	{
		document.getElementById("grade").value = "FAIL";
	}
	else if(parseFloat(document.getElementById("score").value) >= 45 && parseFloat(document.getElementById("score").value) < 50)
	{
		document.getElementById("grade").value = "PASS";
	}
	else if(parseFloat(document.getElementById("score").value) >= 50 && parseFloat(document.getElementById("score").value) < 60)
	{
		document.getElementById("grade").value = "AVERAGE";
	}
	else if(parseFloat(document.getElementById("score").value) >= 60 && parseFloat(document.getElementById("score").value) < 80)
	{
		document.getElementById("grade").value = "GOOD";
	}
	else if(parseFloat(document.getElementById("score").value) >= 80 && parseFloat(document.getElementById("score").value) <= 100)
	{
		document.getElementById("grade").value = "EXCELLENT";
	}
	else
	{
		document.getElementById("grade").style.width = "350px";
		document.getElementById("grade").value = "INVALID SCORE. SCORE MUST BE BETWEEN 0 - 100.";
	}

}