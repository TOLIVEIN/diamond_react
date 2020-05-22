import React, { createContext, Dispatch, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sider from "./components/Sider/Sider";
// import BackTop from "./components/BackTop/BackTop";
import TopJumper from "./components/TopJumper/TopJumper";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
library.add(faAngleDown);

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
            <div className="content">
                <div className="left-blank"></div>
                <aside>
                    <Sider></Sider>
                </aside>
                <article>
                    <VisibleContext.Provider value={setVisible}>
                        <Main setVisible={setVisible}></Main>
                    </VisibleContext.Provider>
                </article>
                <aside>
                    {/* <BackTop visible={visible}></BackTop> */}
                    <TopJumper></TopJumper>
                    {/* <Sider></Sider> */}
                </aside>
                <div className="right-blank"></div>
            </div>
            <footer>
                <Footer visible={visible}></Footer>
            </footer>
        </div>
    );
};

export default App;
