import React from 'react'

function FetchRequests() {
    function npsFetch() {
        fetch(
            // Here here is the API doc's ---> https://www.nps.gov/subjects/developer/api-documentation.htm
            `https://developer.nps.gov/api/v1/parks?&api_key=4gdnWgGflih6aZU43Ixv1a2z9pcnsmj8RqVcTeQV`
        )
            .then((response) => response.json())
            .then((data) => console.log(data))
        // return for the npsFetch function returns the national parks data
        return
    }
    return <div>{npsFetch()}</div>
}

export default FetchRequests
