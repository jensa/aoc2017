var input = parseInt(process.argv[2]);

var total = 1;
var sideLength = 1;
var spiralCount = 0;
while(total<input){
  sideLength += 2;
  total += (sideLength *2) + ((sideLength -2) * 2);
  spiralCount ++;
}
let spiralIndex = total - input;
let indexOnSide = (spiralIndex % (sideLength-1));
let diffFromMiddle = Math.abs(((sideLength-1)/2) - indexOnSide);
let manhattan = spiralCount + diffFromMiddle;
console.log('manhattan: ' + manhattan);

/*var rightOrLeft = spiralIndex < sideLength || (spiralIndex > (sideLength *2) && spiralIndex < sideLength *3);
if(rightOrLeft){

}*/
//side length increases by 2 for each spiral
//1,3,5,7,etc
// spiral size is related like:
//side length *2 + (side length -2 * 2)
