import React from 'react';
import Hero from './Hero'; //Importando componente
import Enemy from './Enemy'; //Importando componente
import {EnemyIMG,EnemyNAME,HeroIMG,HeroNAME} from '../Strings.js';


export default function Arena(props){
    return(
        <div>
            <h2>ARENA: {props.arena}</h2>
            <Hero name= {HeroNAME} img = {HeroIMG} />
            <Enemy name= {EnemyNAME} img = {EnemyIMG} />
        </div>
    )
}