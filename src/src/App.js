import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ItemsContainer from './Components/Items/ItemsContainer';
import {Route} from "react-router-dom";
import SidebarContainer from './Components/Sidebar/SidebarContainer';


function App(props) {

    return (
        <div className="App">
            <Header/>
            <div className="flexContainer">
                <div className="sidebar">
                    <SidebarContainer/>
                </div>
                <div className="mainContainer">
                    <ItemsContainer/>
                </div>
            </div>
        </div>
    );
}

export default App;