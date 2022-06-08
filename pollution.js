

document.querySelector('#lat-lon-search').addEventListener('click', (e) => {
    e.preventDefault()

    const Api_key = `a7dbb009ca938b35199ee5a42f48049e`
    const lat = document.querySelector('#latitude').value
    const lon = document.querySelector('#longitude').value
    const disappearlat = document.querySelector('#latitude')
    const disappearlon = document.querySelector('#longitude')
    console.log(disappearlat.value);
    console.log(disappearlon.value);
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${Api_key}`
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

                response.list.forEach((items, index) => {
        
                    output += `
                    <form class="card"  style="width: 40rem;" id="comp">
                    <img src="https://airpollutionapi.com/images/airpol.png" class="img2" alt="icon">
                    <h2 class="card-title id="ti2" >Air Pollution </h2>
                    <div class="temp2" 
                    <p> <span><b>Components</b></span></p>
                    <p> <span> Carbon Monoxide :<b> ${items.components.co}</b></span></p>
                    <p> <span> Nitric oxide    :<b> ${items.components.no}</b></span></p>
                    <p> <span> Nitrogen Dioxide:<b> ${items.components.no2}</b></span></p>
                    <p> <span> Ozone           :<b> ${items.components.o3} </b></span></p>
                    <p> <span> Sulpher Dioxide :<b> ${items.components.so2}</b></span></p>
                    </form>
                    `
                });

            
            document.querySelector('#cont').innerHTML += output
            disappearlat.value='';
            disappearlon.value='';
        }
    }

xhr.send()
})
