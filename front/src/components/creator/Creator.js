import React, {useRef, useState} from 'react';
import {Card, Input} from "reactstrap";

function Creator() {
    let inputRef = {
        name: useRef(''),
        type: useRef(''),
        dateStart: useRef(''),
        dateEnd: useRef(''),
        cities: useRef(''),
    };

    function handleClick() {

        for (const input in inputRef) {
            if (!inputRef[input]?.current?.value) {
                alert('Failure: field is empty')
                window.location.reload(false);

                return
            }

            if (inputRef[input]?.current.type === 'date') {
                inputRef[input] = inputRef[input]?.current?.value.split('T')[0]
            } else {
                inputRef[input] = inputRef[input]?.current?.value
            }

        }
        if(inputRef?.dateStart < '2021-01-01' || '2024-01-01' > inputRef?.dateEnd > '2021-01-01'){
            alert('Failure: invalid date!')
            window.location.reload(false);

            return
        }
        if(inputRef?.dateStart > inputRef?.dateEnd) {
            alert('Failure: start data < end data!')
            window.location.reload(false);

            return
        }


        fetch('http://localhost:3000/api/createTrain', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputRef),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Success: creating')
                window.location.reload(false);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (

        <Card
            outline
            className="my-2, text-center"
            color="secondary"
            inverse
            style={{
                margin: "auto",
                width: '90%'
            }}
        >
            <Input
                type="text"
                id="nameTrain"
                name="nameTrain"
                innerRef={inputRef.name}
                placeholder='Enter name of train'
            />
            <Input
                type="text"
                id="typeTrain"
                name="typeTrain"
                innerRef={inputRef.type}
                placeholder='Enter type of train'

            />
            <Input
                min="2022-12-01"
                max="2023-01-01"
                type="date"
                id="dateStartTrain"
                name="dateStartTrain"
                ata-date-format="DD MMMM YYYY"
                placeholder='Enter date to start of train'

                innerRef={inputRef.dateStart}
            />
            <Input
                min="2022-12-01"
                max="2023-01-01"
                type="date"
                id="dateEndTrain"
                name="dateEndTrain"
                ata-date-format="DD MMMM YYYY"
                placeholder='Enter date to end of train'

                innerRef={inputRef.dateEnd}
            />
            <Input
                id="cities"
                name="cities"
                innerRef={inputRef.cities}
                placeholder='Enter the route(through coma)'

            />
            <button onClick={handleClick}>Create train</button>
        </Card>
    );
}

export default Creator;