import React, { Children } from 'react';

const Main = ({ children }) => {
  const mainStyle = { width: '100%', height: '80vh', backgroundColor: 'yellow', display: 'flex', justifyContent: 'center', alignItems: 'center'};

  return <div style={mainStyle}>
    {children}
  </div>;
};

export default Main;