import React, { useState } from 'react';

const Dice = () => {
    const bodyStyle = { background: '#f4f4f9', margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center',width: '100%', height: '100%'};
    const diceContainerStyle = { textAlign: 'center'};
    const diceStyle = { width: '100px', height: '100px', position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 1s ease-in-out'};
    const faceStyle = { position: 'absolute', width: '100px', height: '100px', background: 'white', border: '2px solid #000', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', fontWeight: 'bold'}
    const rollBtnStyle = { marginTop: '20px', padding: '10px, 20px', fontSize: '16px', cursor: 'pointer'};
    // 각 숫자에 따른 회전 값을 정의
    const diceTransforms = {
    1: 'rotateY(0deg) rotateX(0deg)',
    2: 'rotateY(90deg) rotateX(0deg)',
    3: 'rotateY(180deg) rotateX(0deg)',
    4: 'rotateY(-90deg) rotateX(0deg)',
    5: 'rotateX(90deg) rotateY(0deg)',
    6: 'rotateX(-90deg) rotateY(0deg)',
    };
    const [currentNumber, setCurrentNumber] = useState(1);

    const rollDice = () => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setCurrentNumber(randomNumber);
    }
  return (
    <div style={bodyStyle}>
        <div style={diceContainerStyle}>
        <div
          style={{
            ...diceStyle,
            transform: diceTransforms[currentNumber],
          }}
        >
          <div style={{ ...faceStyle, transform: 'rotateY(0deg) translateZ(50px)' }}>1</div>
          <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(50px)' }}>2</div>
          <div style={{ ...faceStyle, transform: 'rotateY(180deg) translateZ(50px)' }}>3</div>
          <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(50px)' }}>4</div>
          <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(50px)' }}>5</div>
          <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(50px)' }}>6</div>
        </div>
            <button onClick={rollDice} style={rollBtnStyle}>
                Roll
            </button>
        </div>
    </div>
  );
};

export default Dice;