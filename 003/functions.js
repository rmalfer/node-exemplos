var getDieRoll = function(dieSize){
	var result = Math.ceil(dieSize * Math.random());

	console.log("rolling a die in " + dieSize);
	return result; 
};

var firstDie = getDieRoll(6);
var secondDie = getDieRoll(6);

console.log("* = " + result);

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);