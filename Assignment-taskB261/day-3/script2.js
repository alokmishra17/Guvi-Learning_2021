var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.eu/rest/v2/all");
xhr.onload = function () {
  var data = JSON.parse(this.response);
  fun1(data);
};
xhr.send();

function fun1(values)
{
  for(let i=0;i<values.length;i++)
  {
    console.log("Country : ", values[0].name)
    console.log("Region : ",values[0].region)
    console.log("subregion :",values[0].subregion)
    console.log("population : ",values[0].population)
    console.log("......................")
  }
}