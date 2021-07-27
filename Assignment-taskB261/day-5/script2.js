//captialize title

var titleCaps = function(str){
    let str1 = str.toLowerCase().split(" ");
    for(var i=0; i<str1.length;i++)
    {
        str1[i]= str1[i][0].toUpperCase()+str1[i].slice(1);
    }
    console.log(str1.join(" ")); 
}

let str = "my name is alok mishra, welcome to programming world";
titleCaps(str);

// By IIFE

(function(str){
    let str1 = str.toLowerCase().split(" ");
    for(var i=0; i<str1.length;i++)
    {
        str1[i]= str1[i][0].toUpperCase()+str1[i].slice(1);
    }
    console.log(str1.join(" ")); 
}(str));
