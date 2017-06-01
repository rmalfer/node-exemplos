var getDieRoll = function(dieSize){
	var result = Math.ceil(dieSize * Math.random())
	return result; 
};

var roll = getDieRoll(6);
console.log("ROLL = " + roll);

while (roll < 4){
	console.log("while = " + roll);
	roll = getDieRoll(6);
	console.log("ROLL(while) = " + roll);
}

console.log("ROLL(Após while) = " + roll);

do {
	roll = getDieRoll(6);
	console.log("dowhile = " + roll);
} while (roll > 4)

for (var i = 0; i < 10; i++){
	console.log("i = " + i);	
}

if (roll >= 2 && roll <= 3){
	console.log("Great roll 1!");
}

if (roll == 1 || roll == 6){
	console.log("Great roll 2!");
}

if (!(roll == 1 || roll == 6)){
	console.log("Não é 1 ou 6!");
}

if (roll == 1){
	console.log("É 1")
} else if (roll == 2){
	console.log("É 2");
} else {
	console.log("É 3 ou maior");
}

console.log("YOu rolled a " + roll);