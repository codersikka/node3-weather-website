console.log('Client Side Javascripy file is loaded')
const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const errorMessage = document.querySelector('#message-e')
const resultsMessage = document.querySelector('#message-c')

errorMessage.textContent= 'Loading'
resultsMessage.textContent =''
//errorMessage.textContent='Dummy Error Script Before Execution'

const fetchWeather = (location) => {


fetch('/weather?address='+ location+'').then((response)=>{

        response.json().then((data)=>{
             
            if (data.error){

                errorMessage.textContent="Error, Error"

            }
         console.log(data)
         errorMessage.textContent= data.location
         resultsMessage.textContent="Here are the forecast details. Humidity: "+data.forecast.humidity+". Temperature: "+data.forecast.temperature+" degree celsius. Windspeed: "+data.forecast.windspeed+"."
         
        })
})
}


weatherform.addEventListener('submit',(e)=>{
  e.preventDefault()
  const location = search.value
  console.log(location)  
  fetchWeather(location)

})
