import React, {useState} from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';

const MenuButton = () => {  
  const toggleBtnStyle = { height: '70%', aspectRatio: 1 ,marginRight: '1rem', background: 'none', border: 'none'};
  const whiteColor = { color: 'white'};

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuStyle = {
    width: '10vw',
    height: '30vh',
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: 'lightgray',
    padding: '0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    zIndex: 1000,
    display: isMenuOpen ? 'block' : 'none'
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
        <p>메뉴 1</p>
        <p>메뉴 2</p>
        <p>메뉴 3</p>
      </div>
    </div>
  );
};

export default MenuButton