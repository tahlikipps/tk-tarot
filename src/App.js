import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import YesNo from './Pages/YesNo';
import AllCards from './Pages/AllCards';
import Header from './components/header';
import './App.css';


const App = () => {

    return (
      <div>
        <div className="header">
          <Header />
        </div>
        <div className= "app">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/yesno" element={<YesNo />} />
            <Route path="/allcards" element={<AllCards />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    );
}


export default App;
