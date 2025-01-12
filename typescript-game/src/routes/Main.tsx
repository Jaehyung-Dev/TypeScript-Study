import React, { useState, useEffect } from 'react';

const Main = () => {
  const style = {textAlign: 'center', color: 'red', backgroundColor: 'gray', fontSize: '48px'};
  const style2 = {textAlign: 'center', color: 'blue', backgroundColor: 'yellow', fontSize: '12px'}
  
  const [color, setColor] = useState(style);
  useEffect(() => {
      setTimeout(() => {
          setColor(style2);
      }, 3000);
  }, []);
  return (
    <p style={color}>Test!!!</p>
  )
}

export default Main