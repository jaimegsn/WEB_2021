import React from 'react';
import Arena from './components/Arena';
import World from './components/World';

export default function App(){
  return (
    <>
        <World>
          <Arena arena = "SAO JANUARIO" />
          <Arena arena = "CASTELAO" />
          <Arena arena = "ABILHAO" />
        </World>
    </>
  );
}

