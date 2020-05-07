import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import ItemsContainer from './Components/Items/ItemsContainer';
import {BrowserRouter, Route} from "react-router-dom";
import Sidebar from './Components/Sidebar/Sidebar'


function App(props) {

    return (
        <div className="App">
            <Header/>
            <Sidebar/>
            <ItemsContainer />
        </div>
    );
}

export default App;