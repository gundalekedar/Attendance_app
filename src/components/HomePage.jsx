
import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Dasboard from './Dashboard/Dasboard'
import Classes from './Classes/Classes'
import Teachers from './Teachers/Teachers'
import Students from './Students/Students'
import Attendance from './Attendance/Attendance'

const HomePage = () => {
    
  return (
      <div>
     
      <Routes>
            
            <Route path='/' element={<Dasboard/>}></Route> 
            <Route path='/classes' element={<Classes />}></Route> 
            <Route path='/teachers' element={<Teachers />}></Route> 
            <Route path='/students' element={<Students />}></Route> 
            <Route path='/attendances' element={<Attendance />}></Route> 
      </Routes>
          
       
    </div>
  )
}

export default HomePage
