import React from 'react';

export default function Enemy(props){
    return(
        <div>
            <p>Nome do Inimigo: {props.name}</p>
            <img src={props.img} alt="Foto do Inimigo"></img>
        </div>
    )
}