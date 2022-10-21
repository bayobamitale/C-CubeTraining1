const arrayFunctions = [(a)=> {return Math.PI * a * a}, 
						(a) => {return Math.pow(a,2)}, 
						(a) => {return Math.sqrt(a)},
						(a) => {return Math.log(a)},
						() => {return Math.random()}]

for(var x = 1; x <= 3; x++)
{						
	for(var i = 0; i < arrayFunctions.length; i++)
	{
		console.log(arrayFunctions[i](Math.random() * 100));
	}
	console.log("\n");
}						