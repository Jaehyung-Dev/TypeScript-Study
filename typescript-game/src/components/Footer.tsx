import React from 'react';

const Footer = () => {
  const footerStyle = { width: '100%', height: '10vh', backgroundColor: 'orange', display: 'flex', alignItems: 'center'};
  const liStyle = { width: '100%', height: '100%', listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'space-around', alignItems: 'center'};
  const ulStyle = { padding: 0, margin: 0, color: 'white'}
  return <div style={footerStyle}>
    <li style={liStyle}>
      <ul style={ulStyle}>
        Contact: publicdev2024@gmail.com
      </ul>
      <ul style={ulStyle}>
        Designed and developed by JaeHyung
      </ul>
    </li>
  </div>;
};

export default Footer;