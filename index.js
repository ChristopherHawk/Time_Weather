//-----Catch Components-----//
window.addEventListener('DOMContentLoaded',m);
const btn = document.getElementById('btn');
const CloseSettings = document.getElementById('closeSettings');
const ClockContainer = document.getElementById('clockContainer');
const Preferences = document.getElementById('preferences');
const BoxTop = document.getElementById('boxTop');
const SelectCity = document.getElementById('selectCity');
const LanguageSelect = document.getElementById('Language');
const Idiom = document.getElementById('idiom');
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
const CountryInput = document.getElementById('countryInput');
const CityInput = document.getElementById('cityInput');
const CityPicture1 = document.getElementById('cityPicture1');
const CityPicture2 = document.getElementById('cityPicture2');
const AddNewCity = document.getElementById('addNewCity');
//--------------------------------------------------//

//-----Select-----//
function select(Dir){  
  
  if(SelectCity.value === 'bogotá'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Bogota,co`
    BoxTop.style.backgroundImage = 'url(img/bogota.jpeg)';
    bigNameCTY.style.color = '  rgb(197, 168, 4)';

  }
  if(SelectCity.value === 'medellín'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Medellin,co`
    BoxTop.style.backgroundImage = 'url(img/medellin.jpg)';

  }
  if(SelectCity.value === 'cali'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Cali,co`
    BoxTop.style.backgroundImage = 'url(img/cali.jpg)';
  }
  if(SelectCity.value === 'barranquilla'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Barranquilla,co`
    BoxTop.style.backgroundImage = 'url(img/barranquilla.jpg)';
  }
  if(SelectCity.value === 'cúcuta'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Cucuta,co`
    BoxTop.style.backgroundImage = 'url(img/cucuta.jpg)';
  }
  if(SelectCity.value === 'bucaramanga'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Bucaramanga,co`
    BoxTop.style.backgroundImage = 'url(img/bucaramanga.jpg)';
  }
  if(SelectCity.value === 'lyon'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr`
    BoxTop.style.backgroundImage = 'url(img/lyon2.jpg)';
    bigNameCTY.style.color = 'rgb(197, 65, 4)';
  }
  if(SelectCity.value === 'parís'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Paris,fr`
    BoxTop.style.backgroundImage = 'url(img/paris2.jpg)';
    bigNameCTY.style.color = 'rgb(4, 120, 197)';
  }
  if(SelectCity.value === 'quebec'){    
    Dir = `http://api.openweathermap.org/data/2.5/weather?q=Quebec,ca`
    BoxTop.style.backgroundImage = 'url(img/quebec.jpg)';
    bigNameCTY.style.color = 'rgb(4, 197, 123)';

  }
  
}
//-------Language-------//
LanguageSelect.addEventListener('change', () =>{
  let urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bogota,co`;
  let urlLyon = `http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr`;
  let urlParis = `http://api.openweathermap.org/data/2.5/weather?q=Paris,fr`; 
  let urlQuebec = `http://api.openweathermap.org/data/2.5/weather?q=Quebec,ca`; 
  select(urlTop);    
  select(urlLyon);
  select(urlParis);
  select(urlQuebec);
  
  getWeather(NameCT1, urlTop,  divBogota, iconWeather, Temp1, HumidCity1);
  getWeather(NameCT2, urlLyon,  divLyon, iconWeather2, Temp2, HumidCity2);
  getWeather(NameCT3, urlParis,  divParis, iconWeather3, Temp3, HumidCity3);
  getWeather(NameCT4, urlQuebec, divQuebec, iconWeather4, Temp4, HumidCity4);
  bigNameCTY.innerHTML = SelectCity.value.toUpperCase();

});

//-----Reload-----//
if(location.pathname){    
  let urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bogota,co`;
  let urlLyon = `http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr`;
  let urlParis = `http://api.openweathermap.org/data/2.5/weather?q=Paris,fr`; 
  let urlQuebec = `http://api.openweathermap.org/data/2.5/weather?q=Quebec,ca`; 
  select(urlTop);    
  select(urlLyon);
  select(urlParis);
  select(urlQuebec);  
  getWeather(NameCT1, urlTop,  divBogota, iconWeather, Temp1, HumidCity1);
  getWeather(NameCT2, urlLyon,  divLyon, iconWeather2, Temp2, HumidCity2);
  getWeather(NameCT3, urlParis,  divParis, iconWeather3, Temp3, HumidCity3);
  getWeather(NameCT4, urlQuebec, divQuebec, iconWeather4, Temp4, HumidCity4);
  bigNameCTY.innerHTML = SelectCity.value.toUpperCase();

}
//-----Box Top [Bogotá - Default]-----//
SelectCity.addEventListener('change', function(){   
  
  if(SelectCity.value === 'bogotá'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bogota,co`
    BoxTop.style.backgroundImage = 'url(img/bogota.jpeg)';
    bigNameCTY.style.color = '  rgb(197, 168, 4)';

  }
  if(SelectCity.value === 'medellín'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Medellin,co`
    BoxTop.style.backgroundImage = 'url(img/medellin.jpg)';

  }
  if(SelectCity.value === 'cali'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Cali,co`
    BoxTop.style.backgroundImage = 'url(img/cali.jpg)';
  }
  if(SelectCity.value === 'barranquilla'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Barranquilla,co`
    BoxTop.style.backgroundImage = 'url(img/barranquilla.jpg)';
  }
  if(SelectCity.value === 'cúcuta'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Cucuta,co`
    BoxTop.style.backgroundImage = 'url(img/cucuta.jpg)';
  }
  if(SelectCity.value === 'bucaramanga'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Bucaramanga,co`
    BoxTop.style.backgroundImage = 'url(img/bucaramanga.jpg)';
  }
  if(SelectCity.value === 'lyon'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Lyon,fr`
    BoxTop.style.backgroundImage = 'url(img/lyon2.jpg)';
    bigNameCTY.style.color = 'rgb(197, 65, 4)';
  }
  if(SelectCity.value === 'parís'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Paris,fr`
    BoxTop.style.backgroundImage = 'url(img/paris2.jpg)';
    bigNameCTY.style.color = 'rgb(4, 120, 197)';
  }
  if(SelectCity.value === 'quebec'){    
    urlTop = `http://api.openweathermap.org/data/2.5/weather?q=Quebec,ca`
    BoxTop.style.backgroundImage = 'url(img/quebec.jpg)';
    bigNameCTY.style.color = 'rgb(4, 197, 123)';

  }  
  Bogota.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
  bigNameCTY.innerHTML = SelectCity.value.toUpperCase();
   
  getWeather(NameCT1, urlTop, divBogota, iconWeather, Temp1, HumidCity1);
  
});

//-----Preferences [Settings ]-----//
Idiom.addEventListener('mouseover', function(){  
  Idiom.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
  BoxTop.style.backgroundImage = 'url(img/idioms.png)';
});
Idiom.addEventListener('mouseout', function(){  
  Idiom.style.boxShadow = '';
  if(SelectCity.value === 'bogotá'){ 
    BoxTop.style.backgroundImage = 'url(img/bogota.jpeg)';   

  }
  if(SelectCity.value === 'medellín'){    
    BoxTop.style.backgroundImage = 'url(img/medellin.jpg)';
  }
  if(SelectCity.value === 'cali'){ 
    BoxTop.style.backgroundImage = 'url(img/cali.jpg)';
  }
  if(SelectCity.value === 'barranquilla'){  
    BoxTop.style.backgroundImage = 'url(img/barranquilla.jpg)';
  }
  if(SelectCity.value === 'cúcuta'){    
    BoxTop.style.backgroundImage = 'url(img/cucuta.jpg)';
  }
  if(SelectCity.value === 'bucaramanga'){  
    BoxTop.style.backgroundImage = 'url(img/bucaramanga.jpg)';
  }
  if(SelectCity.value === 'lyon'){    
    BoxTop.style.backgroundImage = 'url(img/lyon2.jpg)';
  }
  if(SelectCity.value === 'parís'){    
    BoxTop.style.backgroundImage = 'url(img/paris2.jpg)';
  }
  if(SelectCity.value === 'quebec'){    
    BoxTop.style.backgroundImage = 'url(img/quebec.jpg)';
  }  


});
CityInput.addEventListener('mouseover', function(){  
  CityInput.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
  
});
CityInput.addEventListener('mouseout', function(){  
  CityInput.style.boxShadow = '';  
});
CountryInput.addEventListener('mouseover', function(){  
  CountryInput.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
  
});
CountryInput.addEventListener('mouseout', function(){  
  CountryInput.style.boxShadow = '';  
});
AddNewCity.addEventListener('mouseover', function(){  
  AddNewCity.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
  
});
AddNewCity.addEventListener('mouseout', function(){  
  AddNewCity.style.boxShadow = ''; 
 
});
ClockContainer.addEventListener('mouseover', function(){  
  ClockContainer.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
  ClockContainer.style.cursor = 'pointer'
  BoxTop.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px #fff';
});
ClockContainer.addEventListener('mouseout', function(){  
  ClockContainer.style.boxShadow = ''; 
  BoxTop.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
});
Preferences.addEventListener('mouseover', function(){  
  Preferences.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
  Preferences.style.cursor = 'pointer'
  BoxTop.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px #fff';
});
Preferences.addEventListener('mouseout', function(){  
  Preferences.style.boxShadow = '';  
  BoxTop.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)'; 
});
BoxTop.addEventListener('mouseout', function(){      
  BoxTop.style.boxShadow = ''; 
});
BoxTop.addEventListener('mouseout', function(){      
  BoxTop.style.boxShadow = ''; 
});


//-----Bogotá-----//
Bogota.addEventListener('mouseover', function(){  
  Bogota.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)';
  BoxTop.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px #fff';
});
Bogota.addEventListener('mouseout', function(){  
  Bogota.style.boxShadow = ''
  
});
//-----Lyon-----//
Lyon.addEventListener('mouseover', function(){
    Lyon.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)'
});
Lyon.addEventListener('mouseout', function(){  
  Lyon.style.boxShadow = ''
});
//-----París-----//
Paris.addEventListener('mouseover', function(){
 Paris.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)'
});
Paris.addEventListener('mouseout', function(){  
  Paris.style.boxShadow = ''
});
//-----Quebec-----//
Quebec.addEventListener('mouseover', function(){
  Quebec.style.boxShadow = 'inset 0 0 2px 1px rgba(255, 255, 255, 0.1), 0px 2px 13px 0px rgb(0, 195, 255)'
});
Quebec.addEventListener('mouseout', function(){  
  Quebec.style.boxShadow = ''
});


//-------------[NEW CITY]------------//
AddNewCity.addEventListener('click', function() {

  const NewCardCity = `NEWCARD${cityName}`
  document.createElement("div", {id:NewCardCity}); 

  //----------Input values-----------//
  var country = CountryInput.value; 
  var city = CityInput.value; 
  var image1 = CityPicture1.value; 
  var image2 = CityPicture2.value; 
  //----------Validation Input-----------//
  //--Input City--//
  if(city === ''){
     if(LanguageSelect.value === '&lang=es'){
      alert(`El campo '${CityInput.placeholder}' es fundamental para agregar una ciudad.`);     
    }
    if(LanguageSelect.value === '&lang=fr'){
      alert(`Le champ '${CityInput.placeholder}' est essentiel pour ajouter une ville.`); 
    }return   
  }
  //--Input Country--//
  if(country === '' ){
    if(LanguageSelect.value === '&lang=es'){
      alert(`El campo '${CountryInput.placeholder}' es fundamental para agregar una ciudad.`)     
    }
    if(LanguageSelect.value === '&lang=fr'){
      alert(`Le champ '${CountryInput.placeholder}' est essentiel pour ajouter une ville.`); 
    }return   
    
  }
  
   var fullCountry = country[0].toUpperCase() + country.slice(1)
   var countryName = country[0].toLowerCase() + country[1].toLowerCase(); 
   var cityName =  city[0].toUpperCase() + city.slice(1);   
   var newUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}`;

     var nameContainer = `div${cityName}`;
     var tempContainer = `temp${cityName}`;
     var iconWeatherContainer = `iconWeather${cityName}`;  
     var humidityContainer = `humidity${cityName}`;
  
   //Create input
     NEWCARD.innerHTML=`<div class="flip-card-container" id="${cityName}" style="--hue: 350">
     <div class="flip-card">
   
       <div class="card-back">
         <figure>
           <div class="img-bg"></div>
           <img src="${image2}">
           <figcaption><i class="fas fa-map-marker-alt" ></i> ${cityName} - ${fullCountry}</figcaption>
         </figure>
   
         <img src="" id="${iconWeatherContainer}">
         <ul>        
           <li id="${nameContainer}"></li>
           <li id="${tempContainer}"></li>
           <li id="${humidityContainer}"></li>
         </ul>
       </div>
   
       <div class="card-front">
         <!-- only if the image is necessary -->
         <figure>
           <div class="img-bg"></div>
           <img src="${image1}">
         </figure>
   
         <button id="${cityName}"></button>
   
         <!-- can add svg here and remove these eight spans -->
         <div class="design-container">
           <span class="design design--1"></span>
           <span class="design design--2"></span>
           <span class="design design--3"></span>
           <span class="design design--4"></span>
           <span class="design design--5"></span>
           <span class="design design--6"></span>
           <span class="design design--7"></span>
           <span class="design design--8"></span>
         </div>
       </div>
   
     </div>
   </div>`

  
   getWeather(cityName, newUrl, nameContainer, iconWeatherContainer, tempContainer, humidityContainer);
  
   if(NEWCARD.innerHTML != ''){    
    
      //Clean input
      CountryInput.value = ''
      CityInput.value = ''
      CityPicture1.value = ''
      CityPicture2.value = ''       
     console.log(NEWCARD.innerHTML)
     window.location.href ='#'
   }
 
 });

//-----Files [Weather]-----//
function getWeather(nameCity, parameters,  weather, icon, temp, humid){

  //---NAME CITY---//
  let Name_City = nameCity;
  //---API KEY---//
  let API_KEY = '&APPID=b842860a5235b80c4f8e7a1b990abe91';
  //---LANGUAGE---//
  let Language = LanguageSelect.value;
  //---URL---//
  let url = parameters + API_KEY + Language;
  //---WEATHER---//
  let result = weather;
  //---WEATHER ICON---//
  let image = icon;
  //---TEMPERATURE---//
  let tempCity = temp
  //---HUMIDITY---//
  let humidCity = humid

  const api =  new XMLHttpRequest();
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
     
      if(LanguageSelect.value === '&lang=es'){
        //Temperature 
        const temperature = files.main.temp;
        tempCity.innerHTML = 'Temperatura: ' + temperature + ' K';

        //Humidity 
        const humidity = files.main.humidity;
        humidCity.innerHTML = 'Humedad: ' + humidity + '%';
       
        //Settings
       textS1.innerHTML = ' Preferencias';   
       textS2.innerHTML = ' Cambiar idioma';   
       textS3.innerHTML = 'Español';   
       textS4.innerHTML = 'Francés';   
       textS5.innerHTML = ' Agregar ciudad';  
       CountryInput.placeholder='País'
       CityInput.placeholder = 'Ciudad' 
       CityPicture1.placeholder = 'Url Imagen frontal'
       CityPicture2.placeholder = 'Url Imagen posterior'
      
      }
      if(LanguageSelect.value === '&lang=fr'){
        //Temperature 
        const temperature = files.main.temp;
        tempCity.innerHTML = 'Température: ' + temperature + ' K';

        //Humidity 
        const humidity = files.main.humidity;
        humidCity.innerHTML = 'Humidité: ' + humidity + '%'; 

        //Settings
        textS1.innerHTML = ' Préférences';   
        textS2.innerHTML = ' Changer la langue';   
        textS3.innerHTML = 'Espagnol';   
        textS4.innerHTML = 'Français';   
        textS5.innerHTML = ' Ajouter une ville';  
        CountryInput.placeholder='Pays'
        CityInput.placeholder = 'Ville' 
        CityPicture1.placeholder = "Url de l'image avant"
        CityPicture2.placeholder = "Url de l'image arrière"
      }
     
                    
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

