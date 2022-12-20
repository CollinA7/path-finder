import React, { useEffect, useState } from 'react'

function ParkList() {
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
        fetch(
            // Here here is the API doc's ---> https://www.nps.gov/subjects/developer/api-documentation.htm
            `https://developer.nps.gov/api/v1/places?stateCode=${state}%2C&limit=6&api_key=4gdnWgGflih6aZU43Ixv1a2z9pcnsmj8RqVcTeQV`
        )
            .then((response) => response.json())
            .then((park) => {
                console.log(park.data)
                setParks(park.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
    }, [])

    function checkWeather() {}

    return (
        <div>
            {/* parks.map creates each list element from the nps API */}
            {parks.map((park) => {
                return (
                    <div className="park-card" key={park.id}>
                        <h3 className="park-title">{park.title}</h3>
                        <p>
                            <strong>Ameneties:</strong>
                            {park.amenities}
                        </p>
                        {/* The check weather button pings the open weather API to check the weather */}
                        <button
                            className="weather-button"
                            onClick={checkWeather()}
                        >
                            <strong>Check Weather</strong>
                        </button>
                        <button className="add-favorites">
                            <strong>Add to Favorites</strong>
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ParkList
