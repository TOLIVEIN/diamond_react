import React, { createContext, Dispatch, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sider from "./components/Sider/Sider";
// import BackTop from "./components/BackTop/BackTop";
import TopJumper from "./components/TopJumper/TopJumper";

export const VisibleContext = createContext(
    {} as Dispatch<React.SetStateAction<boolean>>
);

const App: React.FC = () => {
    // const VisibleContext = createContext(setVisible);
    const [visible, setVisible] = useState(false);

    return (
        <div className="App">
            <header>
                <Header></Header>
            </header>
            <div className="content-container">
                <aside className="nav-bar">
                    <Sider></Sider>
                </aside>
                {/* <div className="left-blank"></div> */}
                <article className="content">
                    <VisibleContext.Provider value={setVisible}>
                        <Main setVisible={setVisible}></Main>
                    </VisibleContext.Provider>
                </article>
                <aside>
                    {/* <BackTop visible={visible}></BackTop> */}
                    {/* <Sider></Sider> */}
                </aside>
                    <TopJumper></TopJumper>
                {/* <div className="right-blank"></div> */}
            </div>
            <footer>
                <Footer visible={visible}></Footer>
            </footer>
        </div>
    );
};

export default App;
