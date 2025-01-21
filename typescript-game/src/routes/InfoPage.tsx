import React from 'react';
import Header from '../components/Header.tsx';
import Main from '../components/Main.tsx';
import Footer from '../components/Footer.tsx';

const Info = () => {
  const infoRenderStyle = {width: '100%', height: '100%', backgroundColor: 'red'};
  return (
    <div>
      <Header>

      </Header>
      <Main>
        <div style={infoRenderStyle}>

        </div>
      </Main>
      <Footer>

      </Footer>
    </div>
  );
};

export default Info;