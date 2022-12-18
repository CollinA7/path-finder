import React, { useEffect, useState } from 'react'

function ParkData() {
    const state = 'IL'
    const [parks, setParks] = useState([])
    // function weatherApi() {
    //     fetch(
    //         `http://api.openweathermap.org/geo/1.0/direct?q=sanantonio,country=US&limit=5&appid=4fce90cadf9eba29dd340628ab5664dc`
    //     )
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    // }

    useEffect(() => {
        // function npsApi() {
        fetch(
            // Here here is the API doc's ---> https://www.nps.gov/subjects/developer/api-documentation.htm
            `https://developer.nps.gov/api/v1/places?stateCode=${state}%2C&limit=6&api_key=4gdnWgGflih6aZU43Ixv1a2z9pcnsmj8RqVcTeQV`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data)
                setParks(data.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    return (
        <div>
            {parks.map((park) => {
                return (
                    <div className="park-card" key={park.id}>
                        <h3 className="park-title">{park.title}</h3>
                        <p>{park.parkBody}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ParkData
