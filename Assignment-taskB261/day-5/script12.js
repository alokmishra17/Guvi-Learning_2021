//Return all the prime numbers in an array

var getPrime= (arr)=>{
    for(var i=0;i<arr.length;i++)
    { 
        let count =0;
        for(var j=2;j<=Math.sqrt(arr[i]);j++)
        {
            if(arr[i]%j==0)
            {
                count++
            }
        }
        if(count==0)
        {
        console.log(arr[i]);
        }
    }
}

let arr =[3,2,7,45,34,31,29,65,74,69,9,11];
console.log(arr);
console.log("Prime no. ")
getPrime(arr);
