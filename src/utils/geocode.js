const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicGFua2FqYWRlc2FpMjUxOSIsImEiOiJjazlzN3g1ejEwMml3M2Vtb2liNWlvZHR2In0.uZfQX-0UiYEtZHZTdOhpew'
    request({url:url},(error,response)=>{
        const data=JSON.parse(response.body)
        if(error)
        {
            console.log('Unable to connect to network. please try again after some time.',undefined)
        }
        else if(data.features.length===0){
            console.log('unable to find location services.',undefined)
        }
        else{
            callback(undefined, {
                latitude: data.features[0].center[1],
                longitude:data.features[0].center[0],
                location: data.features[0].place_name
                })
        }  
    })
}

module.exports=geocode