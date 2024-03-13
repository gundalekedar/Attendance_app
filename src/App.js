import './App.css';
import Attendance from './components/Attendance/Attendance';
import Classes from './components/Classes/Classes';
import Dasboard from './components/Dashboard/Dasboard';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar/Navbar';
import Students from './components/Students/Students';
import Teachers from './components/Teachers/Teachers';
import ToggleButton from './components/ToggleButton';

function App() {
  return (
    <div>
      <div>
        <Navbar /> 
      <HomePage/>
      
      </div>
      
      {/* <Dasboard/> */}
      {/* <Classes /> */}
      {/* <Teachers/> */}
      {/* <Students/> */}
      {/* <Attendance /> */}
     
    </div>
  );
}

export default App;
