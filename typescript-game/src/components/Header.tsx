import React from 'react';
import diceLogo from '../assets/imgs/DiceGameLogo.png';

const Header = () => {
  const headerStyle = { width: '100%', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'green' };
  const logoStyle = { height: '100%', aspectRatio: 1 };
  const mainNameStyle = { fontSize: '3rem', fontWeight: 'bold', color: 'white' };
  const toggleBtnStyle = { height: '70%', aspectRatio: 1 };

  return (
    <div style={headerStyle}>
      <img style={logoStyle} src={diceLogo} alt="Logo" />
      <p style={mainNameStyle}>JH-DiceGame</p>
      <button
        style={toggleBtnStyle}
        onClick={() => alert('Button clicked!')}
      >
        Toggle
      </button>
    </div>
  );
};

export default Header;
