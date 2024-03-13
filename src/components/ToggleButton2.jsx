import React , { useState } from 'react'

const ToggleButton2 = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleClick = () => {
    // Toggle the state between true and false
    setIsToggled(!isToggled);
    };
    const backgroundColor = isToggled ? 'blue' : 'black';
    
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
        {isToggled ? 'L' : 'L'}
      </button>
    </div>
  )
}

export default ToggleButton2
