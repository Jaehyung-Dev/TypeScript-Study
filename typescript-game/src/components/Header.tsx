import React from 'react';
import diceLogo from '../assets/imgs/DiceGameLogo.png';
import MenuButton from './MenuButton.tsx';

const Header = () => {
  const headerStyle = { width: '100%', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'green'};
  const logoStyle = { height: '100%', aspectRatio: 1, marginLeft: '1rem' };
  const mainNameStyle = { fontSize: '2rem', fontWeight: 'bold', color: 'white' };

  return (
    <div style={headerStyle}>
      <img style={logoStyle} src={diceLogo} alt="Logo" />
      <p style={mainNameStyle}>JH-DiceGame</p>
      <MenuButton/>
    </div>
  );
};

export default Header;
