import React, {useEffect, useState} from 'react';
import Table from "../table/table/table";

function Editing(props) {
    const [trains, setTrains] = useState([])
    const handleClickToGetAllTrains = () => {

        fetch('http://localhost:3000/api/findManyTrains', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({selectedOption: null}),
        })
            .then((response) => response.json())
            .then((data) => {
                setTrains( data )
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const stateChanger = (props)=>{
        setTrains(props)
    }
    useEffect(()=>{
        handleClickToGetAllTrains()
    }, [])

    return (

        <div>
            <Table editing = {true} trains = {trains} stateChanger={stateChanger} />
        </div>

    );
}

export default Editing;