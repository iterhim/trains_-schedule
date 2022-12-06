import React, {useEffect, useState} from 'react';
import ElemTable from "./defaultElemTable";
import ElemTableWDel from "./elemTableWDel";
import {Table} from "reactstrap";

function MyTable(props) {

    const [bodyTable, setBodyTable] = useState([]);

    useEffect(()=>{
        try{

            if (props?.trains?.length === 0) return;
            setBodyTable(props?.trains?.map((train) => props?.editing ? <ElemTableWDel key={train._id} train={train} stateChanger={props.stateChanger}/> : <ElemTable key={train._id} train={train}/>))

        }catch (e) {
            console.log(e)
        }
    }, [props?.editing, props.stateChanger, props?.trains])
    return (
        <div>
            <Table
                dark
                size=""
                striped
            >
                <thead>
                <tr>
                    <td>Name of train</td>
                    <td>Type of train</td>
                    <td>Date start</td>
                    <td>Date end</td>
                    <td>Road</td>

                    {props?.editing ? <td>Edit</td> : ''}
                    {props?.editing ? <td>Delete</td> : ''}
                </tr>

                </thead>
                <tbody>
                    {bodyTable}
                </tbody>
            </Table>

        </div>
    );
}

export default MyTable;