import React, {useEffect, useState} from 'react';
import {Button, Input} from "reactstrap";

function ElemTableWDel(props) {
    const stateChanger = props.stateChanger
    const [train, setTrain] = useState({})
    const handleClickEdit = (e) => {
        const parents = [...e?.target?.parentNode?.parentNode?.children]

        const data = [...parents]
            .splice(0, 5)
            .map(el=> el.childNodes[0].value)
        data.unshift(parents[0].id)

        const objData = ({
            name: data[1],
            type: data[2],
            dateStart: data[3],
            dateEnd: data[4],
            cities: data[5],
        })
        if (JSON.stringify(train) === JSON.stringify(objData)) {
            return;
        }
        fetch('http://localhost:3000/api/updateTrain', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: data[0], data: objData}),
        })
            .then((response) => response.json())
            .then((data) => {
                stateChanger( data );
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const handleClickDelete = (e) => {
        const parents = [...e?.target?.parentNode?.parentNode?.children]

        const data = [...parents]
            .splice(0, 5)
            .map(el => el.childNodes[0].value)
        data.unshift(parents[0].id)
        console.log(data);
        const objData = ({
            name: data[1],
            type: data[2],
            dateStart: data[3],
            dateEnd: data[4],
            cities: data[5],
        })
        if (JSON.stringify(train) === JSON.stringify(objData)) {
            return;
        }
        fetch('http://localhost:3000/api/deleteTrain', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id: data[0], data: objData}),
        })
            .then((response) => response.json())
            .then((data) => {

                stateChanger( data );


                if (data.length === 0)
                    window.location.reload(false);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    useEffect(()=>{

        setTrain(props.train)

    },[])

    return (
        <tr key ={train?._id }>
                <td id={train?._id}><Input defaultValue={train?.name}/></td>
                <td><Input defaultValue={train?.type}/></td>
                <td><Input type="date" defaultValue={train?.dateStart?.split('T')[0]}/></td>
                <td><Input type="date" defaultValue={train?.dateEnd?.split('T')[0]}/></td>
                <td><Input defaultValue={train?.cities?.join(', ')}/></td>
                <td><Button color="secondary" onClick={handleClickEdit}>Edit</Button></td>
                <td><Button color="secondary" onClick={handleClickDelete}>Delete</Button></td>
        </tr>
    );
}

export default ElemTableWDel;
