//Return median of two sorted arrays of same size

//By Anonymous function

var sortData= function(arr)
{
    for(var i=0;i<arr.length-1;i++)
    {
        let t=0;
        for(var j=i;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
                t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
    return(arr);
}
var getMedian = function(arr)
{
   let mid = arr.length/2;
   let median =(arr[mid-1]+arr[mid])/2;
   return(median)
    
}

let arr1 = [2,5,7,11,22,24];
let arr2 = [3,6,8,9,15,27];
let newArr=arr1.concat(arr2);
newArr= sortData(newArr);
console.log(sortData(newArr));
console.log("Median :",getMedian(newArr));


//By IIFE

console.log("--------------IIFE--------");

(function(arr)
{
   let mid = arr.length/2;
   let median =(arr[mid-1]+arr[mid])/2;
   console.log("Median : ",median);
    
}(newArr));