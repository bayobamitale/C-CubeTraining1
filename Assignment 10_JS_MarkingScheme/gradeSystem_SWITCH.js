function GRADE()
{
	let score = parseFloat(document.getElementById("score").value);
	switch(true)
	{
		case (score>=0 && score<45):
			document.getElementById("grade").value = "FAIL";
			break;
		case (score>=45 && score<50):
			document.getElementById("grade").value = "PASS";
			break;
		case (score>=50 && score<60):
			document.getElementById("grade").value = "AVERAGE";
			break;
		case (score>=60 && score<80):
			document.getElementById("grade").value = "GOOD";
			break;
		case (score>=80 && score<=100):
			document.getElementById("grade").value = "EXCELLENT";
			break;
		default:
			document.getElementById("grade").style.width = "350px";
			document.getElementById("grade").value = "INVALID SCORE. SCORE MUST BE BETWEEN 0 - 100.";
	}
}