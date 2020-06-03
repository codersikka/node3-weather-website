const request = require ('request')

const forecast = (latitude, longitude, callback) => {

const url = 'http://api.weatherstack.com/current?access_key=f9763e9b9e078beb49da66c3eb93fffb&query='+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'&units=f'

request ({url, json:true},(error,{body})=>{
if (error){

    callback ('Basic Error', undefined)

} else if (body.error){

callback('Formatting Error', undefined)

} else {

    callback(undefined, {
      temperature:body.current.temperature,
      windspeed:body.current.wind_speed,
      humidity:body.current.humidity


    })
}



}


)
}
module.exports = forecast