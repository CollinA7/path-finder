import React from 'react'

function FetchRequests() {
    const state = 'AR'
    function weatherApi() {
        fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=sanantonio,country=US&limit=5&appid=4fce90cadf9eba29dd340628ab5664dc`
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    function npsApi() {
        fetch(
            // Here here is the API doc's ---> https://www.nps.gov/subjects/developer/api-documentation.htm
            `https://developer.nps.gov/api/v1/places?stateCode=${state}%2C&limit=6&api_key=4gdnWgGflih6aZU43Ixv1a2z9pcnsmj8RqVcTeQV`
        )
            .then((response) => response.json())
            .then((data) => mapFunction(data.data))
        const mapFunction = (data) => {
            data.map((data) => console.log(data))
        }
        // return for the npsApi function returns the national parks data
        return
    }
    return <div>{npsApi()}</div>
}

export default FetchRequests
