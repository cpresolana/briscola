import React from 'react';
import Player from './Player.js';
import './style.css';

export function Board(props) {    
    
console.log(props);


    return (
        <div className="board">
        <Player playerID="0"/>
        <Player playerID="1"/>
        </div>
    );
}