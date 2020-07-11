import React from 'react';
import './styles/style.css';


export default function Player(props) {
    let cardsToRender = props.gameData.G['player_' + props.handID].cards;
    return (
        <div className="player">
        <span>Player:<br/></span>
        {cardsToRender.map((x, index) =>
        <img src={x.imagePath} alt={x.alt} key={x.alt} onClick={() => {props.gameData.moves.playCard(index)}}/>)}
        </div>
    )
}
