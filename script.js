// Open Weather API: 6284350acdacc239d1ab6812ae6609c2
// Link to make API call (change city name): http://api.openweathermap.org/data/2.5/weather?q=London&appid=6284350acdacc239d1ab6812ae6609c2

// Declare "data" as global variable, stores JSON info so we can
// alter and access data outside of http request
var data;
var location;

function getCity() {
    // Used to get users current location and pass to getWeather()
    var weatherURL = "";
    var city = $.getJSON('http://ipinfo.io', function(data) {
        var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        data.city + "," + data.region + "&appid=6284350acdacc239d1ab6812ae6609c2";
        getWeather(weatherURL);
    });
}


function getSearchBar() {
    // Used to get city from search bar and pass to getWeather()
    var city = document.getElementsByClassName("search-bar")[0].value;

    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&appid=6284350acdacc239d1ab6812ae6609c2";

    document.getElementsByClassName("search-bar")[0].value = "";

    getWeather(weatherURL);
}


function getWeather(weatherURL) {
    // Need to make API call given the search box text
    //var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" +
    //    location + "&appid=6284350acdacc239d1ab6812ae6609c2";

    request = new XMLHttpRequest();
    request.open("GET", weatherURL, true);

    request.onload = function() {
        // Parse the JSON from http request and store in global var
        data = JSON.parse(request.responseText);
        // Set the city name at top of page
        setLocation(data.name);

        // Change the short weather description and icon
        setWeatherText(data.weather[0].main);

        // Convert default unit of Kelvin to Fahrenheit and round down
        setTemp(Math.floor(data.main.temp * (9/5) - 459.67));
    };
    request.send();
}


function setLocation(location) {
    document.getElementsByClassName("location-text")[0].innerHTML =
        location;
}


function setWeatherText(weatherText) {
    // Changes the short weather description and icon
    document.getElementsByClassName("weather-text")[0].innerHTML =
        weatherText;

    // Set a different icon for clear, cloudy, rainy
    switch(weatherText) {
        case "Clear":
            document.getElementsByClassName("weather-icon")[0].innerHTML =
                "<i class='fa fa-sun-o fa-3x' aria-hidden='true'></i>";
            break;
        case "Thunderstorm":
        case "Drizzle":
        case "Rain":
            document.getElementsByClassName("weather-icon")[0].innerHTML =
                "<i class='fa fa-tint fa-3x' aria-hidden='true'></i>";
            break;
        case "Clouds":
            document.getElementsByClassName("weather-icon")[0].innerHTML =
                "<i class='fa fa-cloud fa-3x' aria-hidden='true'></i>";
            break;
        default:
            document.getElementsByClassName("weather-icon")[0].innerHTML =
                "<i class='fa fa-sun fa-3x' aria-hidden='true'></i>";
            break;
    }
}


function setTemp(temp) {
    document.getElementsByClassName("temp-text")[0].innerHTML =
        temp + "<span class='degree-symbol'>&#176</span>";
}


function toFahr() {
    setTemp(Math.floor(data.main.temp * (9/5) - 459.67));
}


function toCels() {
    setTemp(Math.floor(data.main.temp - 273.15));
}


window.onload = function() {
    getCity();
}