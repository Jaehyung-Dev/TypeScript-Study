import React, { useState } from 'react';

const Dice = () => {
  const bodyStyle = {width: '100%', height: '100%', background: '#f4f4f9', margin: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'};
  const diceContainerStyle = { textAlign: 'center' };
  const diceStyle = {width: '100px', height: '100px', position: 'relative', transformStyle: 'preserve-3d', transition: 'transform 1s ease-in-out'};
  const faceStyle = {position: 'absolute', width: '100px', height: '100px', background: 'white', border: '2px solid #000', display: 'grid', gridTemplateRows: 'repeat(3, 1fr)', gridTemplateColumns: 'repeat(3, 1fr)'};
  const dotStyle = {width: '20px', height: '20px', backgroundColor: 'black', borderRadius: '50%', alignSelf: 'center', justifySelf: 'center'};
  const rollBtnStyle = {marginTop: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer'};
  const historyDivStyle = {width: '100%', height: '10%', position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center'};
  const resultStyle = {margin: '0 1rem',fontSize: '2rem'};

  // 숫자에 따른 3D 회전값 정의
  const diceTransforms = {
    1: 'rotateX(0deg) rotateY(0deg)',
    2: 'rotateX(90deg) rotateY(0deg)',
    3: 'rotateX(0deg) rotateY(-90deg)',
    4: 'rotateX(0deg) rotateY(90deg)',
    5: 'rotateX(-90deg) rotateY(0deg)',
    6: 'rotateX(0deg) rotateY(180deg)',
  };

  // 숫자에 따라 렌더링될 점 위치 정의
  const dotConfigurations = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8],
  };

  const [currentNumber, setCurrentNumber] = useState(1);
  const [rollHistory, setRollHistory] = useState<number[]>([]); // 주사위 결과 기록용 상태
  const [fortune, setFortune] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const getFortune = async () => {
    if(rollHistory.length < 3) {
      alert('주사위를 3번 굴려주세요!');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `주사위에서 나온 숫자 ${rollHistory.join(", ")}를 기반으로 오늘의 운세를 작성해줘.`,
          max_tokens: 150,
        }),
      });
      const data = await response.json();
      setFortune(data.choices[0].text.trim());
    } catch (error) {
      console.error("Error fetching fortune:", error);
      alert("운세를 가져오지 못했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  }

  const rollDice = () => {
    if(rollHistory.length < 3) {
      const randomNumber = Math.floor(Math.random() * 6) + 1; // 1~6의 랜덤 숫자 생성
      setCurrentNumber(randomNumber); // 상태 업데이트
      setRollHistory((prevHistory) => [...prevHistory, randomNumber]);
      // console.log(`Rolled number: ${randomNumber}`); // 디버깅용 출력
    }
  };

  // 숫자에 따라 점 렌더링
  const renderDots = (dots) => {
    return Array.from({ length: 9 }).map((_, index) => (
      <div key={index} style={dots.includes(index) ? dotStyle : {}}></div>
    ));
  };

  return (
    <div style={bodyStyle}>
      <div style={diceContainerStyle}>
        <div
          style={{
            ...diceStyle,
            transform: diceTransforms[currentNumber], // 숫자에 따라 3D 회전값 적용
          }}
        >
          {/* 각 면에 점 렌더링 */}
          <div style={{ ...faceStyle, transform: 'rotateY(0deg) translateZ(50px)' }}>
            {renderDots(dotConfigurations[1])}
          </div>
          <div style={{ ...faceStyle, transform: 'rotateX(-90deg) translateZ(50px)' }}>
            {renderDots(dotConfigurations[2])}
          </div>
          <div style={{ ...faceStyle, transform: 'rotateY(90deg) translateZ(50px)' }}>
            {renderDots(dotConfigurations[3])}
          </div>
          <div style={{ ...faceStyle, transform: 'rotateY(-90deg) translateZ(50px)' }}>
            {renderDots(dotConfigurations[4])}
          </div>
          <div style={{ ...faceStyle, transform: 'rotateX(90deg) translateZ(50px)' }}>
            {renderDots(dotConfigurations[5])}
          </div>
          <div style={{ ...faceStyle, transform: 'rotateX(180deg) translateZ(50px)' }}>
            {renderDots(dotConfigurations[6])}
          </div>
        </div>
        <button
          onClick={rollDice}
          style={{
            ...rollBtnStyle,
            cursor: rollHistory.length >= 3 ? 'not-allowed' : 'pointer',
          }}
          disabled={rollHistory.length >= 3}
        >
          Roll
        </button>
      </div>
      <div style={historyDivStyle}>
      {rollHistory.map((number, index) => (
          <span key={index} style={resultStyle}>{number}</span>
        ))}
      </div>
    </div>
  );
};

export default Dice;