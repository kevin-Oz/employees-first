import logo from './logo.svg';
import './App.css';
import EmployList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
function App() {
  //sending props 
  const employees=[
    {
      id: 1,
      name: 'Ricardo Jimenez',
    },
    {
      id: 2,
      name: 'Juan Suarez',
    },
    {
      id:3,
      name: 'Karla Jimenez',
    }
  ];

  //sending functions
  const addEmployee = (id)=>{
    console.log('agregado ' + id);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmployList employees={employees}/>
        <AddEmployee add={addEmployee} />
      </header>
    </div>
  );
}

export default App;
