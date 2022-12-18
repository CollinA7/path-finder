import React, { useEffect, useState } from 'react'

function ParkCards() {
    const state = 'AR'
    const [parks, setParks] = useState([])
    // function weatherApi() {
    //     fetch(
    //         `http://api.openweathermap.org/geo/1.0/direct?q=sanantonio,country=US&limit=5&appid=4fce90cadf9eba29dd340628ab5664dc`
    //     )
    //         .then((response) => response.json())
    //         .then((data) => console.log(data))
    // }

    function npsApi() {
        fetch(
            // Here here is the API doc's ---> https://www.nps.gov/subjects/developer/api-documentation.htm
            `https://developer.nps.gov/api/v1/places?stateCode=${state}%2C&limit=6&api_key=4gdnWgGflih6aZU43Ixv1a2z9pcnsmj8RqVcTeQV`
        )
            .then((response) => response.json())
            .then((park) => ParkList(park.data))

        // return for the npsApi function returns the national parks data
        return
    }

    // TODO: map the list element to display array --- maybe useEffect hooks could help
    function ParkList(props) {
        const listItem = props.map((park) => (
            // Maybe try park.props.children
            <li key={park.id}>{park}</li>
        ))
        // console.log(listItem)
        return <ul>{listItem}</ul>
    }
    console.log(parks)
    return (
        <div>
            {npsApi()}
            <div>
                <ParkList />
            </div>
        </div>
    )
}

export default ParkCards
