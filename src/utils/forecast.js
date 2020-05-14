const request=require('request')

const forecast=(latitude,longitude,callback)=>{

    const url='http://api.weatherstack.com/forecast?access_key=49db88f1d18d439f31230406dcfe00ed&query='+latitude+','+longitude
    
    request({ url: url,json:true}, (error, response) => {
    
        const data = JSON.parse(JSON.stringify(response.body))
        const temperature=data.current.temperature
        const precip=data.current.precip
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(data.error)
        {
            callback('Unable to find location',undefined)
        }
        else{
          callback(undefined,'It is currently ' + temperature + ' degrees out. There is a ' + precip + '% chance of rain.')
        }
    })
}

module.exports=forecast