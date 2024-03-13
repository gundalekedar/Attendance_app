import React , { useState } from 'react'

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
    // Toggle the state between true and false
    setIsToggled(!isToggled);
    };
    const backgroundColor = isToggled ? 'green' : 'black';
    
     const buttonStyles = {
    backgroundColor: backgroundColor,
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    color: 'white',
    cursor: 'pointer',
    borderRadius:'9999px'
    };
    
  return (
     <div>
      <button style={buttonStyles} onClick={handleClick}>
        {isToggled ? 'P' : 'P'}
      </button>
    </div>
  )
}

export default ToggleButton
