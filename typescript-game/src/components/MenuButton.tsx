import React, {useState} from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const MenuButton = () => {  
  const toggleBtnStyle = { height: '70%', aspectRatio: 1 ,marginRight: '5rem', background: 'none', border: 'none'};
  const whiteColor = { color: 'white'};

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuStyle = {
    width: '10vw',
    height: '30vh',
    position: 'fixed',
    top: '10vh',
    right: '1rem',
    backgroundColor: 'lightgray',
    padding: '0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    zIndex: 1000,
    display: isMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  } as React.CSSProperties;


  return (
    <div style={{ position: 'relative' }}>
      <button
        style={toggleBtnStyle}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <DensityMediumIcon style={whiteColor} />
      </button>
      <div style={menuStyle}>
        <a href='/'>Info</a>
        <a href='/'>Ranking</a>
        <a href='/'>Guide</a>
      </div>
    </div>
  );
};

export default MenuButton