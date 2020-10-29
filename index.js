//-----Catch Components-----//
window.addEventListener('DOMContentLoaded',m);
const btn = document.getElementById('btn');
const BoxTop = document.getElementById('boxTop');
const SelectCity = document.getElementById('selectCity');
const bigNameCTY = document.getElementById('bigNameCTY');
const NameCT1 = document.getElementById('nameCT1');
const NameCT2 = document.getElementById('nameCT2');
const NameCT3 = document.getElementById('nameCT3');
const NameCT4 = document.getElementById('nameCT4');
const iconWeather = document.getElementById('iconWeather');
const iconWeather2 = document.getElementById('iconWeather2');
const iconWeather3 = document.getElementById('iconWeather3');
const iconWeather4 = document.getElementById('iconWeather4');
const Temp1 = document.getElementById('temp1');
const Temp2 = document.getElementById('temp2');
const Temp3 = document.getElementById('temp3');
const Temp4 = document.getElementById('temp4');
const HumidCity1 = document.getElementById('humidity1');
const HumidCity2 = document.getElementById('humidity2');
const HumidCity3 = document.getElementById('humidity3');
const HumidCity4 = document.getElementById('humidity4');
const divBogota = document.getElementById('divBogota');
const divLyon = document.getElementById('divLyon');
const divParis = document.getElementById('divParis');
const divQuebec = document.getElementById('divQuebec');
const Bogota = document.getElementById('bogota');
const Lyon = document.getElementById('lyon');
const Paris = document.getElementById('paris');
const Quebec = document.getElementById('quebec');
//--------------------------------------------------//



//-----Reload-----//
if(location.pathname){
  let urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bogota,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`;
  let urlLyon = `http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`;
  let urlParis = `http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`; 
  let urlQuebec = `http://api.openweathermap.org/data/2.5/weather?q=Quebec,ca&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`; 
  

  if(SelectCity.value === 'bogotá'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bogota,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/bogota.jpg)';
    bigNameCTY.style.color = '  rgb(197, 168, 4)';

  }
  if(SelectCity.value === 'medellín'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Medellin,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/medellin.jpg)';
  }
  if(SelectCity.value === 'cali'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Cali,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/cali.jpg)';
  }
  if(SelectCity.value === 'barranquilla'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Barranquilla,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/barranquilla.jpg)';
  }
  if(SelectCity.value === 'cúcuta'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Cucuta,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/cucuta.jpg)';
  }
  if(SelectCity.value === 'bucaramanga'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bucaramanga,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/bucaramanga.jpg)';
  }
  if(SelectCity.value === 'lyon'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/lyon2.jpg)';
    bigNameCTY.style.color = 'rgb(197, 65, 4)';
  }
  if(SelectCity.value === 'parís'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/paris2.jpg)';
    bigNameCTY.style.color = 'rgb(4, 120, 197)';

  }
  if(SelectCity.value === 'quebec'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Quebec,ca&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/quebec.jpg)';
    bigNameCTY.style.color = 'rgb(4, 197, 123)';

  }
  getWeather(NameCT1, urlTop, divBogota, iconWeather, Temp1, HumidCity1);
  getWeather(NameCT2, urlLyon, divLyon, iconWeather2, Temp2, HumidCity2);
  getWeather(NameCT3, urlParis, divParis, iconWeather3, Temp3, HumidCity3);
  getWeather(NameCT4, urlQuebec, divQuebec, iconWeather4, Temp4, HumidCity4);
  bigNameCTY.innerHTML = SelectCity.value.toUpperCase();

}



//-----[Bogotá]-----//
Bogota.addEventListener('mouseover', function(){
  let urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bogota,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`;

  if(SelectCity.value === 'bogotá'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bogota,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/bogota.jpg)';
    bigNameCTY.style.color = '  rgb(197, 168, 4)';
  }
  if(SelectCity.value === 'medellín'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Medellin,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/medellin.jpg)';
  }
  if(SelectCity.value === 'cali'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Cali,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/cali.jpg)';
  }
  if(SelectCity.value === 'barranquilla'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Barranquilla,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/barranquilla.jpg)';
  }
  if(SelectCity.value === 'cúcuta'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Cucuta,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/cucuta.jpg)';
  }
  if(SelectCity.value === 'bucaramanga'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bucaramanga,co&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/bucaramanga.jpg)';
  }
  if(SelectCity.value === 'lyon'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/lyon2.jpg)';
    bigNameCTY.style.color = 'rgb(197, 65, 4)';
  }
  if(SelectCity.value === 'parís'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/paris2.jpg)';
    bigNameCTY.style.color = 'rgb(4, 120, 197)';
  }if(SelectCity.value === 'quebec'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Quebec,ca&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`
    BoxTop.style.backgroundImage = 'url(img/quebec.jpg)';
    bigNameCTY.style.color = 'rgb(4, 197, 123)';

  }
 
  getWeather(NameCT1, urlTop, divBogota, iconWeather, Temp1, HumidCity1);
  Bogota.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)'
  bigNameCTY.innerHTML = SelectCity.value.toUpperCase();
});

Bogota.addEventListener('mouseout', function(){  
  Bogota.style.boxShadow = ''
});

//-----Lyon-----//
Lyon.addEventListener('mouseover', function(){
  let urlLyon = `http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`;
  getWeather(NameCT2, urlLyon, divLyon, iconWeather2, Temp2, HumidCity2);
  Lyon.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)'
});
Lyon.addEventListener('mouseout', function(){  
  Lyon.style.boxShadow = ''
});

//-----París-----//
Paris.addEventListener('mouseover', function(){
  let urlParis = `http://api.openweathermap.org/data/2.5/weather?q=Paris,fr&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`;
  getWeather(NameCT3, urlParis, divParis, iconWeather3, Temp3, HumidCity3);
  Paris.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)'
});
Paris.addEventListener('mouseout', function(){  
  Paris.style.boxShadow = ''
});

//-----Quebec-----//
Quebec.addEventListener('mouseover', function(){
  let urlQuebec = `http://api.openweathermap.org/data/2.5/weather?q=Quebec,ca&APPID=b842860a5235b80c4f8e7a1b990abe91&lang=es`;
  getWeather(NameCT4, urlQuebec, divQuebec, iconWeather4, Temp4, HumidCity4);
  Paris.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)'
});
Quebec.addEventListener('mouseout', function(){  
  Quebec.style.boxShadow = ''
});


//-----Files [Weather]-----//
function getWeather(nameCity, parameters, weather, icon, temp, humid){

  let Name_City = nameCity;
  //---URL---//
  let url = parameters;
  //---WEATHER---//
  let result = weather;
  //---WEATHER ICON---//
  let image = icon;
  //---TEMPERATURE---//
  let tempCity = temp
  //---HUMIDITY---//
  let humidCity = humid

  const api = new XMLHttpRequest();
  api.open('GET', url, true);
  api.send();
  api.onreadystatechange = function () {

    if(this.status == 200 && this.readyState == 4){
      let files = JSON.parse(this.responseText)
      result.innerHTML = '';
      //Name City
      const Name = files.name;
      const Country = files.sys.country;  
      Name_City.innerHTML = Name + ' - ' + Country;

      //Weather
      for(let item of files.weather){
        const abstract = item.description;
        const code = item.icon;     
        result.innerHTML = abstract.toUpperCase();
        image.setAttribute("src", `http://openweathermap.org/img/wn/${code}@2x.png`);
        image.style.width = '120px'
        image.style.height = '120px'       
      }      
      //Temperature 
      const temperature = files.main.temp;
      tempCity.innerHTML = 'Temperatura: ' + temperature + ' K';

      //Humidity 
      const humidity = files.main.humidity;
      humidCity.innerHTML = 'Humedad: ' + humidity + '%';
       
                    
    }
  }

};

//-----Clock-----//

function m(){
var date = new Date();
var hours = date.getHours();
var minutes = checkNumber(date.getMinutes());
var seconds = checkNumber(date.getSeconds());
var Clock = document.getElementById('clock');


 Clock.innerHTML =  hours +  ": " + minutes + ": " + seconds;
}
function checkNumber(number){
  if(number < 10) number = "0" + number;  
  return number;
}
 setInterval(m,500);