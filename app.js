// console.log("App - js")
// console.log("Debug")
// console.log("New note")

//request
// const request = require('request');
// const geocodeURL =
// 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

// request({ url: geocodeURL, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to location services!')
//     } else if (response.body) {
//         console.log(response.body.message)
//     } else {
//         const latitude = 10
//         const longitude = 20
//         console.log(latitude, longitude)
//     }
// })

//callback function
// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         callback(data)
//     }, 2000)
// }

// geocode('Philade', (data) => {
//     console.log(data)
// })

const geocode = require('./utils/geocode.js')
geocode('Tony', (error, response) => {
    console.log('Error', error)
    console.log('Response', response)
})

//callback chaining : call geocode is complete => then forecast( input of forecast is output of geocode)
geocode('Tonys', (error, data) => {
    if (error) {
        console.log('error ' + error)
    }
    console.log('data', data)
    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})