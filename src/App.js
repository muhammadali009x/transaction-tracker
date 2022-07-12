import React from 'react';
import Child from './child'
import {TransactionProvider} from './transContext'

import './App.css';

function App() {
  return (
    <TransactionProvider>
      <div className="App">
        <Child/>
      </div>
   </TransactionProvider>
  );
}

export default App;
