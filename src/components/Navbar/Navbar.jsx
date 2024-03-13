import React from 'react'
import Sidebar from '../Sidebar/Sidebar'

const Navbar = () => {
  const mystyle = {
    width: 'full',
    height: '70px',
    backgroundColor: 'lightpink',
    marginBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between'
    
  }
  return (
    <div >
        <div style={ mystyle}>
        <Sidebar></Sidebar>
        Super20
      </div>  
    </div>
    
  )
}

export default Navbar

