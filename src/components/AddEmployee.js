import React from 'react';



export default function AddEmployee(props){
    const { add } = props;
    const id = 2;


    return(
        <div>
            <button className="btn" onClick={()=>add(id)} >Add</button>
        </div>
    );

}













