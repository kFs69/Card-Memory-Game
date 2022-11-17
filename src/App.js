import './App.css';
import { useEffect, useState } from 'react';

import Card from './components/Card';

function App() {
  const [cardData, setCardData] = useState([])
  const [action, setAction] = useState(0);
  const [selectedCard, setSelectedCard] = useState([]);
  const [foundCard, setFoundCard] = useState([]);
  const [moves, setMoves] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setCardData(suffleCards());
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setSeconds(prevState => prevState + 1);
    }, 1000)
  }, [seconds])

  const minutes = Math.floor(seconds / 60);
  const timerSeconds = seconds % 60;

  const suffleCards = () => {
    const data = ['A','B','C','D','E','F','G','H','A','B','C','D','E','F','G','H'];

    return data.sort((a, b) => 0.5 - Math.random());
  }

  useEffect(() => {
    if(action === 2) {
      setTimeout(() => {
        if(cardData[selectedCard[0]] !== cardData[selectedCard[1]]) {
          setAction(0);
          setSelectedCard([]);
        } else {
          setAction(0);
          setSelectedCard([]);
          setFoundCard(prevState => [...prevState, cardData[selectedCard[0]]])
        }
      }, 800);
      setMoves(prevState => prevState + 1);
    }
  }, [action, selectedCard])
    
  const selectCard = card => {
    if(action < 2) {
      setAction(prevState => prevState + 1);
      setSelectedCard(prevState => [...prevState, card]);
    }
  }
  
  const restartGame = () => {
    setAction(0);
    setSelectedCard([]);
    setFoundCard([]);

    setCardData(suffleCards());
  }

  return (
    <div className="App">
      <div className="infoContainer">
        <section className="timer">
          <span>{String(minutes).padStart(2, '0')}</span>
          <span>:</span>
          <span>{String(timerSeconds).padStart(2, '0')}</span>
        </section>
        <p>{moves} Moves</p>
        <button onClick={restartGame} className="restart buttonStyle">Reiniciar</button>
      </div>
      <div className="board">
        <Card 
          cardData={cardData}
          order={0}
          foundCard={foundCard}
          selectCard={selectCard}
          selectedCard={selectedCard}
        />
        <Card 
          cardData={cardData}
          order={1}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={2}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={3}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        
        <Card 
          cardData={cardData}
          order={4}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={5}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={6}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={7}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        
        <Card 
          cardData={cardData}
          order={8}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={9}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={10}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={11}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        
        <Card 
          cardData={cardData}
          order={12}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={13}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={14}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
        <Card 
          cardData={cardData}
          order={15}
          selectCard={selectCard}
          selectedCard={selectedCard}
          foundCard={foundCard}
        />
      </div>
    </div>
  );
}

export default App;
