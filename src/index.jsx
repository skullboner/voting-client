import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

ReactDOM.render(
    <div>
      <Voting pair={pair} vote={(entry) => {console.log(entry)}} />
    </div>,
    document.getElementById('app')
);
