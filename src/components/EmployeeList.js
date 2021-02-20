import React from 'react';


 export default  function EmployeeList(props){
	const employees = props.employee;
	const listItems = employees.map((e) =>
	  <li>{e.name} {e.age} </li>
	);

	return(
	<div>
		<h1>Employees</h1>
		<ul>
		{listItems}
		</ul>
	</div>
	);
 }
//export default Saludo();
