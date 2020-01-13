import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <div className="content">
        <div className='left-blank'>
        </div>
        <aside>
          <Sider></Sider>
        </aside>
        <article>
          <Main setVisible={ setVisible }></Main>
        </article>
        <aside>
          <Sider></Sider>
        </aside>
        <div className='right-blank'>
        </div>
      </div>
      <footer>
        <Footer visible={ visible }></Footer>
      </footer>
    </div>
  );
}

export default App;
