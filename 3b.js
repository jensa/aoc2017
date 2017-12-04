var input = parseInt(process.argv[2]);
Object.prototype.at = function(c){return this[c] === undefined || this[c] === null ? 0 :this[c];}

var m = {'0,0':1};
var c = [1,0];
var sideLength = 1;
while(true){
  sideLength += 2;
  for(var i=0;i< sideLength-2;i++){
    addNeighbours();
    c[1] = c[1]+1;
  }
  for(var i=0;i< sideLength-1;i++){
    addNeighbours();
    c[0] = c[0]-1;
  }
  for(var i=0;i< sideLength-1;i++){
    addNeighbours();
    c[1] = c[1]-1;
  }
  for(var i=0;i< sideLength;i++){
    addNeighbours();
    c[0] = c[0]+1;
  }
}

function addNeighbours(){
    var total = neighbours(c[0],c[1]);
    if(input < total){
    console.log(total);
      process.exit(0);
    }
    m[co(c)] = total;
}

function neighbours(x,y){
  return [[x+1,y],[x+1,y+1],[x+1,y-1],[x,y+1],[x,y-1],[x-1,y],[x-1,y+1],[x-1,y-1]].map(coord =>{
    return m.at(co(coord));
  }).reduce((acc,i) => {return acc + i},0);
}

function co(coords){
  return ''+coords[0]+','+coords[1];
}
