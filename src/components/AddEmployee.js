import React from 'react';
import {Button} from 'react-bootstrap';


export default function AddEmployee(props){
    const { add } = props;
    const id = 2;


    return(
        <div>
             <Button variant="primary" onClick={()=>add(id)} >Add</Button>{' '}
        </div>
    );

}













