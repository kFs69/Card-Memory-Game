import React, { useEffect, useState } from 'react';
import '../App.css';

function Card({ cardData, order, foundCard, selectedCard, selectCard }) {
    
  return (
    <div className="card" onClick={() => selectCard(order)} style={ foundCard.includes(cardData[order]) ? { backgroundColor: '#02ccba' } : { backgroundColor: '#2e3d49' }}>
        <b style={
            selectedCard[0]===order || selectedCard[1]===order ? { display: 'block' } : { display: 'none' } &&
            foundCard.includes(cardData[order]) ? { display: 'block', backgroundColor: '#02ccba' } : { display: 'none' }
        }>
            {cardData[order]}
        </b>
    </div>
  )
}

export default Card;