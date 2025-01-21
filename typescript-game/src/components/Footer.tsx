import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const footerStyle = { width: '100%', height: '10vh', backgroundColor: 'orange', display: 'flex', alignItems: 'center'};
  const ulStyle = { width: '100%', height: '100%', listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'space-around', alignItems: 'center'};
  const liStyle = { padding: 0, margin: 0, color: 'white'}
  const linkBtnStyle = { background: 'none', border: 'none', color: 'inherit', fontWeight: 'bold'}
  const linkTextStyle = { textDecoration: 'none', color: 'inherit', fontWeight: 'bold'};

  const navi = useNavigate();
  const linkInfo = () => {
    navi('/Info');
  };
  const linkTerms = () => {
    alert('준비중입니다.');
    navi('/');
  };
  const linkPolicy = () => {
    alert('준비중입니다.');
    navi('/');
  };
  const linkCustomerService = () => {
    alert('준비중입니다.');
    navi('/');
  };
  return <div style={footerStyle}>
    <ul style={ulStyle}>
      <li style={liStyle}>
        <button style={linkBtnStyle} onClick={linkInfo}>사이트소개</button>
      </li>
      <li style={liStyle}>
        <button style={linkBtnStyle} onClick={linkTerms}>이용약관</button>
      </li>
      <li style={liStyle}>
        <button style={linkBtnStyle} onClick={linkPolicy}>개인정보처리방침</button>
      </li>
      <li style={liStyle}>
        <button style={linkBtnStyle} onClick={linkCustomerService}>고객센터</button>
      </li>
    </ul>
    <ul style={ulStyle}>
      <li style={liStyle}>
        Developed by <a style={linkTextStyle} href='https://github.com/Jaehyung-Dev'>Jaehyung-Dev</a>
      </li>
      <li style={liStyle}>
      Contact :{' '}
        <a style={linkTextStyle} href="mailto:publicdev2024@gmail.com">
            publicdev2024@gmail.com
        </a>
      </li>
    </ul>
  </div>;
};

export default Footer;