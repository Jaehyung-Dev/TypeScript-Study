import React from 'react'
import Header from '../components/Header.tsx';
import Main from '../components/Main.tsx';
import Footer from '../components/Footer.tsx';
import { Navigate, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const layoutStyle = {width : '100%', height: '100%'}; 
  const startBtnStyle = { width: '20vw', height: '5vh'}

  const navi = useNavigate();
  const startGame = () => {
    navi('/game');
  };
  return (
    <div style={layoutStyle}>
      <Header>
        
      </Header>
      <Main>
        <button style={startBtnStyle}
          onClick={startGame}>
          오늘의 운세 보러가기
        </button>
      </Main>
      <Footer>

      </Footer>
    </div>
  )
}

export default MainPage