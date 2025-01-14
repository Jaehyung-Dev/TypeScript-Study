import React from 'react'
import Header from '../components/Header.tsx'
import Main from '../components/Main.tsx'
import Footer from '../components/Footer.tsx'

const GamePage = () => {
  const layoutStyle = {width : '100%', height: '100%'}; 
  const gameRenderStyle = { width: '60%', height: '90%', backgroundColor: 'black', display: 'flex', position: 'relative'};
  const diceBtnStyle = { width: '10%', height: '10%', justifySelf: 'end', position: 'absolute', bottom: '10%', right: '5%'};

  return (
    <div style={layoutStyle}>
      <Header>
        
      </Header>
      <Main>
        <div style={gameRenderStyle}>
            <button style={diceBtnStyle}>

            </button>
        </div>
      </Main>
      <Footer>

      </Footer>
    </div>
  )
}

export default GamePage