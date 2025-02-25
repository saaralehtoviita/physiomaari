 /*doing the request*/

function renderWeather(weather) {
    //console.log(weather);
    var resultsContainer = document.querySelector('#saatiedot');
    //kaupunki=name, sää=main & description, lämpötila=temp, tuulen nopeus=speed

    //luodaan taulukko (jos sitä ei vielä ole)
    var taulukko = resultsContainer.querySelector("table");
    if(!taulukko) {
    taulukko = document.createElement("table");
    taulukko.border = "1";
    resultsContainer.appendChild(taulukko);

    //luodaan taulukon otsikot
    var otsikkorivi = document.createElement("tr");
    var otsikot = ["Kaupunki", "Lämpötila (°C)", "Kuvaus", "Tuulen nopeus (m/s)"];
    
    otsikot.forEach(text => {
        var th = document.createElement("th");
        th.textContent = text;
        otsikkorivi.appendChild(th);
    });

    taulukko.appendChild(otsikkorivi);

}

    //luodaan rivi kaupungille
    var rivi = document.createElement("tr");

    var kaupunkiSolu = document.createElement("td");
    kaupunkiSolu.textContent = weather.name;
    rivi.appendChild(kaupunkiSolu);

    var lampotilaSolu = document.createElement("td");
    lampotilaSolu.textContent = weather.main.temp;
    rivi.appendChild(lampotilaSolu);

    var kuvausSolu = document.createElement("td");
    kuvausSolu.textContent = weather.weather[0].description;
    rivi.appendChild(kuvausSolu);

    var tuuliSolu = document.createElement("td");
    tuuliSolu.textContent = weather.wind.speed;
    rivi.appendChild(tuuliSolu);

    taulukko.appendChild(rivi);
}

/*displaying results, fetch weather data for a city*/

function fetchWeather(kaupunki) {
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${kaupunki}&units=metric&lang=fi&appid=452ddea81cd8573bad58e9b9796c8cf0`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderWeather(data))
        .catch(error => console.error("Säätietoja ei voitu hakea", error))
} 

fetchWeather("Helsinki");
fetchWeather("Tampere");
fetchWeather("Barcelona");
fetchWeather("Valencia");
fetchWeather("Turku");
