
const apiUrl = 'http://api.weatherapi.com/v1/current.json';
const apiKey = '90427770a1954e448df182439212805';

function weather(city){
var xhr = new XMLHttpRequest();
let url = 'http://api.weatherapi.com/v1/forecast.json?key=90427770a1954e448df182439212805&q=' + city + '&days=3&aqi=no&alerts=no'
 //apiUrl + '?' + 'key=' + apiKey + '&q=' + city + '&days=3&aqi'+'=no&alerts=no'

xhr.open('GET', url);

xhr.onreadystatechange = function(){
    if(this.readyState === 4){
        let response = JSON.parse(this.response);
        console.log(response);
        document.getElementById('grad').innerHTML ='Lokacija: ' +response.location.name;
        document.getElementById('slika').src = response.current.condition.icon;
        document.getElementById('temperatura').innerHTML ='Trenutna temperatura: '+response.current.temp_c + ' °C';
        document.getElementById('vjetar').innerHTML ='Brzina vjetra: ' +response.current.wind_kph + ' km/h'
        document.getElementById('temp-sutra').innerHTML ='Minimalna temperatura: '  +response.forecast.forecastday[0].day.mintemp_c;
        document.getElementById('min-temp-sutra').innerHTML = 'Maksimalna temperatura: '+response.forecast.forecastday[0].day.maxtemp_c;
        document.getElementById('vrijeme-sutra').innerHTML = 'Prognoza za: ' +response.forecast.forecastday[1].date;
        document.getElementById('slika-sutra').src = response.forecast.forecastday[1].day.condition.icon;
        document.getElementById('temp-prekosutra').innerHTML ='Minimalna temperatura: '  +response.forecast.forecastday[2].day.mintemp_c;
        document.getElementById('min-temp-prekosutra').innerHTML = 'Maksimalna temperatura: '+response.forecast.forecastday[2].day.maxtemp_c;
        document.getElementById('vrijeme-prekosutra').innerHTML = 'Prognoza za: ' +response.forecast.forecastday[2].date;
        document.getElementById('slika-2').src = response.forecast.forecastday[2].day.condition.icon;
    }


}

xhr.send();
}

document.getElementById('btn-search').addEventListener('click', function(){
   let city = document.getElementById('unos-grada').value;
   

    weather(city)
    
    

});




