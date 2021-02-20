import React from 'react';



export default function AddEmployee(props){
    const id = 2;

    return(
        <div>
            <button className="btn" onClick={()=>props.add(id)} >Add</button>
        </div>
    );

}













