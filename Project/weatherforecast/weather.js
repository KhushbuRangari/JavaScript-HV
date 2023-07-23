let qContainer = document.querySelector(".weather-data")


var APIKey = "e734f02834407c7708ddda37b1d497db"

const city = "udaipur"

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=e734f02834407c7708ddda37b1d497db";



async function fetchData() {
    const response = await fetch(queryURL)
    const data = await response.json();

    console.log(data);


    // const len = data.length;

    // const randomNo = Math.floor(Math.random()*len)

    console.log(data.name);

    const temp = Math.round((data.main.temp -273.15));   // main presssure

    const wind = data.wind      //speed ,gust, deg

    console.log(wind.speed);


    if(temp<22){
        qContainer.innerHTML = `   <ul>
        <li>Name : ${data.name}</li>
        <li style="background-color: gray">Temperature :${temp} celsius</li>
        <li>Wind Speed :${wind.speed}</li>
    </ul>`
    
    }
    else if (temp>22 && temp<40 )
    {
        qContainer.innerHTML = `   <ul>
        <li> Cordinates are : Lon :${data.coord.lon} Lat :${data.coord.lat}
        <li>Name : ${data.name}</li>
        <li style="background-color: orange">Temperature :${temp} celsius</li>
        <li>Wind Speed :${wind.speed}</li>
    </ul>`
    }




}