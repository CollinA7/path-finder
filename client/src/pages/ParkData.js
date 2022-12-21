import React from 'react'
import ParkList from '../components/ParkList'

const ParkData = () => {
    return (
        <div className="container">
            <div>
                {/* TODO: add form data here */}
                <form>
                    <label>
                        State:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                    <ParkList />
                </form>
            </div>
        </div>
    )
}

export default ParkData