const request = require('request') //import
//const url = 'https://api.pirateweather.net/forecast/fExxwnkoYr4VJ266c0MtglIv37LLYur1/37.8267,-122.4233'
const url = 'https://api.pirateweather.net/forecast/fExxwnkoYr4VJ266c0MtglIv37LLYur1/37.8267,-122.4233?units=si' //key value pairs, check api doc
const urlMap = 'https://api.mapbox.com/search/geocode/v6/forward?q=Los%20Angeles&access_token=pk.eyJ1Ijoic3Itcm9ja3kiLCJhIjoiY201MHR2cnBxMGdndDJtcHVsZmYzMW1rciJ9.E6MwPBd-8u2uzd3kAsTw2w'

request({url: url, json: true}, (error, response) => { //callback function
    //const data = (response.body.currently)//pulling "property"-currently from JSON.check parsed api of url using json-formatter extension.
    if(error){
        console.log('Unable to connect to weather services')//error handling to be readable, checking by turning off internet
    }else if(response.body.error){ //os level problems
        console.log('Unable to find location')
    }else{
        console.log('It will ' + response.body.daily.data[0].summary+ ' today. It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain')
    }
    //console.log('It will ' + response.body.daily.data[0].summary+ ' today. It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain')
})

/*
request({url: urlMap, json: true}, (error, response) => {
    //console.log('Longitude: ' + response.body.features[0].properties.coordinates.longitude) //+ ' today. It is currently ')// + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain')
    const longitude = response.body.features[0].properties.coordinates.longitude
    const latitude = response.body.features[0].properties.coordinates.latitude
    console.log("Long: "+ longitude + ", Lati: " + latitude)
})
*/
    
/*
//ch6,sec4
request({url: url}, (error, response) => { //callback function
    //console.log(response) //long output, why?
    const data = JSON.parse(response.body)
    //console.log(data)
    console.log(data.currently)
})
*/

/*
//ch6,sec2
console.log("starting") 
setTimeout(()=>{ //likely to be used frequently
    console.log("2 second timer") //runs after 2s, and outputs start and end first
}, 2000)
setTimeout(()=>{ //why does this output after "stopping"?
    console.log("0 second timer")
}, 0)
console.log("stopping")
*/