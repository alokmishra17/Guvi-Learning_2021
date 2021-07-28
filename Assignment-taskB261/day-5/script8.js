// Rotate an array by k times


var rotateOne = function(arr,size)
{
    let temp = arr[0];
    for(var i=0;i<size;i++)
    {
        arr[i] = arr[i+1];
    }
    arr[size-1]=temp;
}
var rotateArray = function(arr,d,size)
{
    for(var i=0;i<d;i++)
    {
        rotateOne(arr,size);
    }
    return(arr);
}

let arr = [1,2,3,4,5,6,7,8,9,5,7];
let size = arr.length;
console.log("Given Array : ",arr);
arr = rotateArray(arr,3,size);
console.log("After Rotation : ",arr);

//By IIFE

console.log("\n-----------------IIFE-------------");

(function(arr,d,size)
{
    for(var i=0;i<d;i++)
    {
        rotateOne(arr,size);
    }
    console.log("After Rotate : ",arr);
}(arr,2,size));