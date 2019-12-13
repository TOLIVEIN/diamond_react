import React from 'react';
import './App.css';

import Button from 'antd/es/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Init
        </p>
        <Button type="primary">init</Button>
      </header>
    </div>
  );
}

export default App;
