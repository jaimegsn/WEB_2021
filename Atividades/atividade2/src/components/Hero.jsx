import React from 'react';

export default function Hero(props){
    return(
        <div>
            <p>Nome do Heroi: {props.name}</p>
            <img src={props.img} alt="Foto do Heroi"></img>
        </div>
    )
}