import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function ParkList() {
    const state = 'IL'
    const [parks, setParks] = useState([])

    function checkWeather(park) {
        const lat = park.latitude
        const lon = park.longitude
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=4fce90cadf9eba29dd340628ab5664dc`
        )
            .then((response) => response.json())
            // This console.log responds with the weather data on the clicked park
            .then((data) => console.log(data))
    }

    // weather click handler passes the park data to the weather API
    function weatherHandler(park, e) {
        e.preventDefault()
        checkWeather(park)
    }

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

    return (
        <div>
            {/* parks.map creates each list element from the nps API */}
            {parks.map((park) => {
                return (
                    <div className="park-card" key={park.id}>
                        <div>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={park.images[0].url}
                                ></Card.Img>
                                <Card.Body>
                                    <Card.Title>{park.title}</Card.Title>
                                    <Card.Text>
                                        <strong>Ameneties:</strong>
                                        {park.amenities}
                                    </Card.Text>

                                    {/* The check weather button pings the open weather API to check the weather */}
                                    <Button
                                        variant="primary"
                                        className="weather-button"
                                        onClick={(e) => weatherHandler(park, e)}
                                    >
                                        <strong>Check Weather</strong>
                                    </Button>
                                    <Button className="add-favorites">
                                        <strong>Add to Favorites</strong>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ParkList
