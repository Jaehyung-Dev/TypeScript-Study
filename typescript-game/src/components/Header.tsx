import React from 'react';
import diceLogo from '../assets/imgs/DiceGameLogo.png';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const Header = () => {
  const headerStyle = { width: '100%', height: '10vh', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'green' };
  const logoStyle = { height: '100%', aspectRatio: 1, marginLeft: '1rem' };
  const mainNameStyle = { fontSize: '3rem', fontWeight: 'bold', color: 'white' };
  const toggleBtnStyle = { height: '70%', aspectRatio: 1 ,marginRight: '1rem', background: 'none', border: 'none'};
  const whiteColor = { color: 'white'};

  return (
    <div style={headerStyle}>
      <img style={logoStyle} src={diceLogo} alt="Logo" />
      <p style={mainNameStyle}>JH-DiceGame</p>
      <button
        style={toggleBtnStyle}
        onClick={() => alert('Button clicked!')}
      >
        <DensityMediumIcon style={whiteColor}/>
      </button>
    </div>
  );
};

export default Header;
