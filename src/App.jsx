import React from 'react';
import { Button, Stack } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setbgColor] = useState("black");

  const changeBackground = (color) => {
    setbgColor(color);
  }

  return (
    <div
      className="container-fluid vh-100 d-flex align-items-end justify-content-center"
      style={{ backgroundColor: bgColor }}
    >
      {/* Stack buttons, change direction on smaller screens */}
      <Stack 
        direction={{ xs: 'column', sm: 'row' }} 
        spacing={{ xs: 5, sm: 2}}
        className='mb-5 w-50 justify-content-center'
      >
        <Button  onClick={() => changeBackground('blue')} variant="contained" fullWidth>Blue</Button>
        <Button className='bg-success' onClick={() => changeBackground('green')} variant="contained" fullWidth>Green</Button>
        <Button className='bg-danger' onClick={() => changeBackground('red')} variant="contained" fullWidth>Red</Button>
        <Button className='bg-warning' onClick={() => changeBackground('yellow')} variant="contained" fullWidth>yellow</Button>
        <Button className='bg-secondary' onClick={() => changeBackground('grey')} variant="contained" fullWidth>Grey</Button>
      </Stack>
    </div>
  );
}

export default App;
