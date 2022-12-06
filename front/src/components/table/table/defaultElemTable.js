
import React from 'react';

function ElemTable(props) {
    const train = props.train
    return (
        <tr key ={train?._id }>
            <td>{train?.name}</td>
            <td>{train?.type}</td>
            <td>{train?.dateStart?.split('T')[0]}</td>
            <td>{train?.dateEnd?.split('T')[0]}</td>
            <td>{train?.cities?.join(', ')}</td>
        </tr>
    );
}

export default ElemTable;