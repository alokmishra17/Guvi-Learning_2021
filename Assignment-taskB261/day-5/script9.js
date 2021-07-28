//Print odd numbers in an array

var printOdd = (arr)=>{
    for(var i=0;i<arr.length; i++)
    {
        if(arr[i]%2!=0)
        {
            console.log(arr[i]);
        }
    }
}

let arr = [2,3,5,6,8,4,12,7,9,11];
console.log(arr);
console.log("Odd no :");
printOdd(arr);
