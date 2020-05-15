const request=require('request')

const forecast=(latitude,longitude,callback)=>{

    const url='http://api.weatherstack.com/forecast?access_key=49db88f1d18d439f31230406dcfe00ed&query='+latitude+','+longitude
    
    request({ url: url,json:true}, (error, response) => {
    
        const data = JSON.parse(JSON.stringify(response.body))
        const temperature=data.current.temperature
        const precip=data.current.precip
        const localtime=data.location.localtime
        
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(data.error)
        {
            callback('Unable to find location',undefined)
        }
        else{
            
          callback(undefined,data.current.weather_descriptions[0] +'. It is currently ' + temperature + ' degrees out. It feels like '+ data.current.feelslike + ' degrees out. The humidity is '+data.current.humidity+'%. There is a ' + precip + '% chance of rain.')
        }
    })
}

module.exports=forecast