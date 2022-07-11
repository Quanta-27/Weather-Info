let weatherdetails={
apiKey:"58304785abc172bba35d099489432508",
fetchWeather:function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
    + city 
    +"&units=metric&APPID="
    +this.apiKey
    )
    .then((response)=>response.json()).then((data)=>this.displayWeather(data));
},
displayWeather(data){
    const{ name}=data;
    const{ temp,humidity}=data.main;
    const {speed}=data.wind;
    const{icon,description}=data.weather[0];
     document.getElementById("location").innerText="Weather in "+name;
     document.getElementById("temp").innerText=temp+"°C";
     document.getElementById("icon").src="https://openweathermap.org/img/wn/" +icon+ ".png";
     document.getElementById("desc").innerText=description;
     document.getElementById("humidity").innerText="Humidity : "+humidity+" %";
     document.getElementById("windspeed").innerText="Wind Speed : "+speed+" km/h";
     document.body.style.backgroundImage="url('https://source.unsplash.com/random/900x700/?" + name + "')";
},
     find : function(){
        this.fetchWeather(document.getElementById("searchbox").value);
     }
};

document.getElementById("btn").addEventListener("click",function(){
weatherdetails.find();
});
document.getElementById("searchbox").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weatherdetails.find();
    }
});
