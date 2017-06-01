//var getDieRoll = function(dieSize){
//	var result = Math.ceil(dieSize * Math.random())
//	return result; 
//};

var die = {
	size: 6,
	totalRolls: 0, 
	roll: function() {
		var result = Math.ceil(this.size * Math.random())
		this.totalRolls += 1;
		return result;		
	}
};

console.log(die);
console.log(die.size);

die.size = 10;
console.log(die.size);
console.log(die.roll(6));
console.log("-----------------");

console.log("Total rolls " + die.totalRolls);
console.log(die);
