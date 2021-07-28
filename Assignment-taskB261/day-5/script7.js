//Remove duplicates from an array


var sortData= function(arr)
{
    for(var i=0;i<arr.length;i++)
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
var removeDuplicate = function(arr)
{
    let newArr = [];
    for(var i=0;i<=arr.length;i++)
    {
            if(arr[i]!=arr[i+1])
            {   
    
                newArr.push(arr[i]);
            }
    }
    return(newArr)
}

arr = [1,2,4,2,5,1,6,4,3,6,7,3,7,2,3,11,13,2,13]

console.log(arr);
arr = sortData(arr);
console.log("Sorted Data :",arr);
console.log("Unique Element :",removeDuplicate(arr));

//By IIFE

console.log("---------------IIFE-------------");

(function(arr)
{
    let newArr = [];
    for(var i=0;i<=arr.length;i++)
    {
            if(arr[i]!=arr[i+1])
            {   
    
                newArr.push(arr[i]);
            }
    }
    console.log("Unique Values :",newArr);
}(arr));
