const arrayFunctions = [(a)=> {return Math.PI * a * a}, 
						(a) => {return Math.pow(a,2)}, 
						(a) => {return Math.sqrt(a)},
						(a) => {return Math.log10(a)},
						(a) => {return Math.sin(a * Math.PI/180)}]

for(var x = 1; x <= 3; x++)
{						
	for(var i = 0; i < arrayFunctions.length; i++)
	{
		var parameter = Math.ceil(Math.random() * 10);
		console.log("Function: " + arrayFunctions[i] + " with argument " + parameter + ", yields: ");
		console.log(arrayFunctions[i](parameter ));
		console.log("\t");
	}
	console.log("======================================================================================");
}						