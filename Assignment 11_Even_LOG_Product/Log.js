function LOG()
{
	for(var i = 0; i <= 200; i++)
	{
		if(i == 0)
		{
			document.write("Log base 10 of 0: undefined <br>");
		}
		else
		{
			document.write("Log base 10 of " + i + ": " + Math.log10(i) + "<br>");
		}
	}
}
