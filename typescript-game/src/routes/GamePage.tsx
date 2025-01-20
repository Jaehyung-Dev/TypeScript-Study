import React from 'react'
import Header from '../components/Header.tsx'
import Main from '../components/Main.tsx'
import Footer from '../components/Footer.tsx'
import Dice from '../components/Dice.tsx';

const GamePage = () => {
  const layoutStyle = {width : '100%', height: '100%'}; 
  const gameRenderStyle = { width: '60%', height: '90%', backgroundColor: 'black', display: 'flex'};

  return (
    <div style={layoutStyle}>
      <Header>
        
      </Header>
      <Main>
        <div style={gameRenderStyle}>
          
        <Dice></Dice>
        </div>
      </Main>
      <Footer>

      </Footer>
    </div>
  )
}

export default GamePage