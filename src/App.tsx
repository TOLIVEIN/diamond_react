import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
        <Sider></Sider>
        <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
