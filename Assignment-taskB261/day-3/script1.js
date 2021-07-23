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
            console.log(values[i].flag)
          }