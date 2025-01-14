import React from 'react';

const Footer = () => {
  const footerStyle = { width: '100%', height: '10vh', backgroundColor: 'orange', display: 'flex', alignItems: 'center'};
  const ulStyle = { width: '100%', height: '100%', listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'space-around', alignItems: 'center'};
  const liStyle = { padding: 0, margin: 0, color: 'white'}
  const linkStyle = { textDecoration: 'none', color: 'inherit', fontWeight: 'bold'};

  return <div style={footerStyle}>
    <ul style={ulStyle}>
      <li style={liStyle}>
        <a style={linkStyle} href="/">사이트소개</a>
      </li>
      <li style={liStyle}>
        <a style={linkStyle} href="/">이용약관</a>
      </li>
      <li style={liStyle}>
        <a style={linkStyle} href="/">개인정보처리방침</a>
      </li>
      <li style={liStyle}>
        <a style={linkStyle} href="/">고객센터</a>
      </li>
    </ul>
    <ul style={ulStyle}>
      <li style={liStyle}>
        Developed by <a style={linkStyle} href='https://github.com/Jaehyung-Dev'>JaeHyung</a>
      </li>
      <li style={liStyle}>
      Contact :{' '}
        <a style={linkStyle} href="mailto:publicdev2024@gmail.com">
            publicdev2024@gmail.com
        </a>
      </li>
    </ul>
  </div>;
};

export default Footer;