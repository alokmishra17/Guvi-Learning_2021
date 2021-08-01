

var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
var data = JSON.parse(this.response);
fun1(data);
fun2(data);
fun3(data);
fun4(data);
};
xhr.send();

//Get all the countries from Asia continent /region using Filter function

function fun1(values){
    let arr1 = values
                     .filter((value)=>value.region == "Asia")
                     .map((value)=> value.name);
    console.log("Country in Asia Region :")
    console.log(arr1.join("\n"));    
}



//Get all the countries with a population of less than 2 lakhs using Filter function

function fun2(values)
{
    let arr1 = values
               .filter((value)=> value.population<200000)
               .map((value)=> value.name);
    console.log("----------------------------------------------")
    console.log("country with population less than 2 lakh :")
    console.log(arr1.join("\n"))
}



//Print the following details name, capital, flag using forEach function

function fun3(values)
{
    console.log("----------------------------------------------")
    console.log("All Country details -- Name, Capital & Flag:")
    values.forEach((element) => {
        console.log(`Country : ${element.name} | Capital : ${element.capital}`);
        console.log(`Flag : ${element.flag}`);
    });
}



//Print the total population of countries using reduce function

function fun3(values)
{
    let population = values.reduce((total,value)=>{
        return total+value.population;
    },0);
    console.log("----------------------------------------------")
    console.log("country with population less than 2 lakh : ")
    console.log(`Total Population -- ${population}`);
}



//Print the country which uses US Dollars as currency.

function fun4(values){
    let arr1 = values
        .filter((value)=>value.currencies[0].code == "USD")
        .map((value)=> value.name);
    
    console.log("----------------------------------------------")
    console.log("country which uses US Dollers as currency: ")
    console.log(arr1.join("\n"));   
    }
    
