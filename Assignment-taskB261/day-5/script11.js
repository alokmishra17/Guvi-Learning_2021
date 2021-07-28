//Sum of all numbers in an array

var sum = (arr)=>{
    var total =0;
    for(var i=0; i<arr.length; i++)
    {
        total= total+ arr[i];
    }
    return(total);
}

let arr = [10,20,30,40,50];
console.log(arr);
console.log("sum = ",sum(arr));