import React from 'react';
import './App.css';
import Counter from './Components/Counter';
import PureCompCounter from './Components/PureCompCounter';

const  App =  () => {
  return (
    <>
        <div>
          <h1 style={{textAlign:'center'}}>PURE COMPONENT & HOC COMPONENT EXAMPLE WITH COUNTER INCREASE</h1>
          <PureCompCounter/>
          <Counter/>
        </div>
    </>
  );
}

export default App;
