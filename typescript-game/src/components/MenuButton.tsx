import React, {useState} from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { useNavigate } from 'react-router-dom';

const MenuButton = () => {  
  const toggleBtnStyle = { height: '70%', aspectRatio: 1 ,marginRight: '5rem', background: 'none', border: 'none', justifySelf: 'center'};
  const whiteColor = { color: 'white'};
  const btnStyle = { width: '100%', height: '100%', border: 'solid 1px white', backgroundColor: 'lightgreen'};
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuStyle = {
    width: '100%',
    height: '30vh',
    position: 'fixed',
    top: '10vh',
    right: '0',
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

  const navi = useNavigate();

  const linkLogin = () => {
    alert('준비중입니다.');
    // navi('/Login);
  };
  
  const linkJoin = () => {
    alert('준비중입니다.');
    // navi('/Join');
  };
  const linkRanking = () => {
    alert('준비중입니다.');
    // navi('/Ranking');
  };
  const linkGuide = () => {
    alert('준비중입니다.');
    // navi('/Guide');
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        style={toggleBtnStyle}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <DensityMediumIcon style={whiteColor} />
      </button>
      <div style={menuStyle}>
        <button
          style={btnStyle}
          onClick={linkLogin}>
          Login
        </button>
        <button 
          style={btnStyle}
          onClick={linkJoin}>
          Join
        </button>
        <button
          style={btnStyle}
          onClick={linkRanking}>
          Ranking
        </button>
        <button
          style={btnStyle}
          onClick={linkGuide}>
          Guide
        </button>
      </div>
    </div>
  );
};

export default MenuButton