import React from 'react';


 export default  function EmployeeList(props){
	//	Destructuring construction
	const { employees=[] } = props;
	const listItems = employees.map((e) =>
	  <li key={e.id}>{e.name} </li>
	);

	return(
	<div>
		<h1>Employees</h1>
		<ul>{listItems}</ul>
	</div>
	);
 }
//export default Saludo();
