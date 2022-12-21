import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

function ParkList() {
    const state = 'IL'
    const [parks, setParks] = useState([])

    function formHandler(data) {}
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
                        <div className='cardContainer'>
                                <Container fluid>
                                    <Row>
                                        <Col xs lg="2">
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img
                                                variant="top"
                                                src={park.images[0].url}
                                            ></Card.Img>
                                            <Card.Body>
                                                <Card.Title>
                                                    {park.title}
                                                </Card.Title>
                                                <Card.Text>
                                                    <strong>Ameneties:</strong>
                                                    {park.amenities}
                                                </Card.Text>

                                                {/* The check weather button pings the open weather API to check the weather */}
                                                <ButtonGroup>
                                                    <Button
                                                        variant="primary"
                                                        className="weather-button"
                                                        onClick={checkWeather()}
                                                    >
                                                        <strong>
                                                            Check Weather
                                                        </strong>
                                                    </Button>
                                                    <Button className="add-favorites">
                                                        <strong>
                                                            Add to Favorites
                                                        </strong>
                                                    </Button>
                                                </ButtonGroup>
                                            </Card.Body>
                                        </Card>
                                        </Col>
                                    </Row>
                                    </Container>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ParkList
