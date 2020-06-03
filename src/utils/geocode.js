
const request = require('request')

const geocode = (address, callback) => {

 
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1Ijoic2lra2Fjb2RlciIsImEiOiJja2FkYWgxc2owNmtyMzRtdGMzcjV4dGNkIn0.w23n74jTw72c9snKiTTDeA&limit=1'
    
    request ({url, json:true}, (error,{body})=>{
        
    
        if (error){
    
            callback('Basic Errors Bro',undefined)
    
        } else if (body.features.length===0){
    
            callback('Data not found',undefined)
    
        } else{
    
           
            callback(undefined,{
               
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name
    
    
            })
            //console.log("Latitude: " + response.body.features[0].geometry.coordinates[1])
        }
    
    
    })
    }
    
    module.exports = geocode