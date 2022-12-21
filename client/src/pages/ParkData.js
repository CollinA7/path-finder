import React from 'react';
import ParkList from '../components/ParkList';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup'; 
import Dropdown from 'react-bootstrap/Dropdown'; 
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Button from 'react-bootstrap/esm/Button';

const ParkData = () => {
    return (
        <div className="container">
            <div>
                {/* TODO: add form data here */}
                <Dropdown></Dropdown>
                <form>
                    <Dropdown>
                    <label>
                        State (Two Letter Abbreviation):
                        
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">Select a State</Dropdown.Toggle>
                    {/* Add the ability to select from an array of state Abbreviations */}
                    </label>
                    <Button type="submit" value="Submit" >Go!</Button>
                    
                    <ParkList />
                    </Dropdown>
                </form>
            </div>
        </div>
    )
}

export default ParkData