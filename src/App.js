import logo from './logo.svg';
import './App.css';
import EmployList from './components/EmployeeList';
function App() {
  const employees=[
    {
      name: 'Ricardo Jimenez',
      age:'25'
    },
    {
      name: 'Juan Suarez',
      age:'21'
    },
    {
      name: 'Karla Jimenez',
      age:'23'
    }
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <EmployList employee={employees}/>
      </header>
    </div>
  );
}

export default App;
