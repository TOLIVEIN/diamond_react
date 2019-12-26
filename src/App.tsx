import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <Header></Header>
        <Sider></Sider>
        <Main setVisible={ setVisible }></Main>
      <Footer visible={ visible }></Footer>
    </div>
  );
}

export default App;
