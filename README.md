# Local-Weather
Show the local weather depending on your location.

Steps to Build

1. Design HTML/CSS of page
    a. Title
    b. Location
    c. Current Weather Description
    d. Current Temperature
    e. Button to change from F to C
    f. Icon or background based on weather

2. Use js to connect to Open Weather API
    a. Pull city + state (json.name)
    b. Pull weather details (json.weather.description)

3. Pull data from OW API and change HTML
    a. Change City + State in ".location-text"
    b. Change weather description in ".weather-text"
    c. Change degree text in ".temp-text"
    d. Change icon in ".weather-icon" (look into day/night icons)

4. Use js to make search bar work
    a. Search button sends call to OW API and repeat steps 2 & 3

5. Use js to make "F" and "C" links work to convert temp
    a. Convert to fahr: change ".temp-text"
    b. Convert to cels: change ".temp-text"



Function Needed

1. Function to get user's current location
2. Function to make API call to get info (default temp is fahr)
3. Function to change city + state text in ".location-text"
4. Function to change weather description in ".weather-text"
5. Function to change degree text in ".degree-text"
    Make sure degree symbol is added back with appropriate class
6. Function to change icon in ".weather-icon" depending on weather text
7. Function to convert fahr to cels
8. Function to convert cels to fahr
9. Function to get sunrise and convert to local time
10. Function to get sunset and convert to local time