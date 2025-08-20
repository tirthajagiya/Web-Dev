function findLargestNumber(a,b,c){
    large = a>b?(a>c?a:c):(b>c?b:c)
    console.log(large);
}

findLargestNumber(10,20,30);
findLargestNumber(20,10,30);
findLargestNumber(30,20,10);