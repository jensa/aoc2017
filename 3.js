var input = parseInt(process.argv[2]);

var total = 1;
var sideLength = 1;
var spiralCount = 0;
var spiralSize = 0;
while(total<input){
  sideLength += 2;
  spiralSize = (sideLength *2) + ((sideLength -2) * 2);
  total += spiralSize;
  spiralCount ++;
}
let spiralIndex = total - input;
let indexOnSide = (spiralIndex % (sideLength-1));
let diffFromMiddle = Math.abs(((sideLength-1)/2) - indexOnSide);
let manhattan = spiralCount + diffFromMiddle;
console.log('manhattan: ' + manhattan);
