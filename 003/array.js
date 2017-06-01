var getDieRoll = function(dieSize){
	var result = Math.ceil(dieSize * Math.random())
	return result; 
};

var things = [1, 2, 3, "pizza"];
for (var i = 0; i < things.length; i++){
	console.log("things["+i+"] = " + things[i]);	
}

for (var i = 0; i < process.argv.length; i++){
	console.log("argv["+i+"] = " + process.argv[i]);	
}

var roll = getDieRoll(6);
console.log("ROLL = " + roll);