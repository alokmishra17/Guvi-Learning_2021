//Return all the palindromes in an array

var getPallindrome = function(arr){
    for(var i=0;i<arr.length;i++)
    {
        var n =arr[i];
        let temp = arr[i];
        let rev=0;
        let rem =0;

        while(temp>0)
        {
           rem= temp % 10;
           rev= rev*10+rem;
           temp=Math.floor(temp/10);
        }
        if(n==rev)
        {
            console.log(arr[i]);
        }
    }

}

let arr = [321,121,443,657,767,873,545];
console.log(arr);
console.log("Pallindrome No :",)
getPallindrome(arr);

//By IIFE

console.log("------------IIFE---------")
(function(arr){
    for(var i=0;i<arr.length;i++)
    {
        var n =arr[i];
        let temp = arr[i];
        let rev=0;
        let rem =0;
        while(temp>0)
        {
           rem= temp % 10;
           rev= rev*10+rem;
           temp=Math.floor(temp/10);
        }
        if(n==rev)
        {
            console.log(arr[i]);
        }
    }
}(arr));