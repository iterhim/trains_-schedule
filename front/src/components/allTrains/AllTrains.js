import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Form, Input, Label, Row} from "reactstrap";
import MyTable from "../table/table/table";

function AllTrains(props) {
    const [trains, setTrains] = useState([])
    const [selectedOption, setSelectedOption] = useState('')
    const [letters, setLetters] = useState({})

    const GetAllTrains = () => {
        try {
            fetch('http://localhost:3000/api/findManyTrains', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({selectedOption}),
            })
                .then((response) => response.json())
                .then((data) => {
                    setTrains(data)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (e) {
            console.log(e)
        }

    }
    const findSpecificTrain = () => {
        try {
            if (Object.entries(letters).length === 0) {
                alert('Write correct message!')
                return
            }
            fetch('http://localhost:3000/api/findSpecificTrain', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({letters}),
            })
                .then((response) => response.json())
                .then((data) => {
                    setTrains(data)
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        GetAllTrains(selectedOption)
    }, [letters, selectedOption])
    return (
        <Card
            body
            className="text-center"

        >
            <Input
                type={"select"}
                size="4"
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}>

                <option value='additionTome'>time of addition</option>
                <option value='dateStart'>shipping time</option>
                <option value='dateEnd'>arrival time</option>
            </Input>
            <Form>
                <Row className="row-cols-lg-auto g-3 align-items-center">

                    <Col>
                        <Card
                            body
                            className="text-center"

                        >
                            <Label
                                className="visually-hidden"
                                for="examplePassword"
                            >
                                Password
                            </Label>
                            <Input onChange={e => setLetters(e.target.value)} placeholder='454B'/>
                        </Card>
                    </Col>

                    <Col>
                        <Button onClick={findSpecificTrain}>find</Button>
                    </Col>
                </Row>
            </Form>
            <Form></Form>

            <MyTable editing={false} trains={trains}/>
        </Card>
    );
}

export default AllTrains;