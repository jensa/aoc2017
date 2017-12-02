console.log(process.argv[2].split('').map(c => parseInt(c)).reduce((acc,c,i,a) => {return acc + (c == (i+(a.length/2) > a.length-1 ? a[i-(a.length/2)] : a[i+(a.length/2)]) ? c : 0);}, 0));
