

document.querySelector('.search-btn').addEventListener('click', (e) => {
    e.preventDefault()
    const city_name = document.querySelector('#search').value
    const api_key = `a7dbb009ca938b35199ee5a42f48049e`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${api_key}`
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
// xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
// xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
// xhr.setRequestHeader("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com");
// xhr.setRequestHeader("API-Key", "a7dbb009ca938b35199ee5a42f48049e");

  xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            console.log(response)
            // Create Elemets and Put in the HTML
            let output = ''

              response.weather.forEach(items=> {
                
                output += `
                <form class="card" id="weather" style="width: 40rem;">
                <img src="https://www.freeiconspng.com/thumbs/weather-icon-png/weather-icon-png-5.png" class="img1" alt="icon">
                <h2 class="card-title id="ti" ><b>Weather</b></h2>
                <div class="temp1" >
                <p> <span>City: <b>${response.name}</span></b></p>
                <p><span>Temperature:<b> ${response.main.temp}&degC</b></span></p>
                <p><span>Humidity: <b>${response.main.humidity}</b></span></p>
                <p><span>wind: deg: <b>${response.wind.deg}</b></span></p>
                <p><span>wind:speed:<b> ${response.wind.speed}</b></span></p>
                <p> <span>clouds: <b>${items.description}</b></span></p>
                <p> <span>  lattitude: <b>${response.coord.lat}</b></span></p>
                <p> <span>longitude:<b> ${response.coord.lon}</b></span></p>
                </div>
                </form>
                `
              });  

            
            document.querySelector('#cont').innerHTML += output
        }
    }

xhr.send()
})
