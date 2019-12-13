import React from 'react';
import './App.css';
import { Button, Layout } from 'antd';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sider from './components/Sider/Sider';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Sider></Sider>
        <Layout>
          <Header></Header>
          <Main></Main>
          <Footer></Footer>
        </Layout>
      </Layout>
      {/* <header className="App-header">
        <p>
          Init
        </p>
        <Button type="primary">init</Button>
      </header> */}
    </div>
  );
}

export default App;
