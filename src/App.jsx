import React from 'react';
import MainPage from "./pages/MainPage";
import {ParallaxProvider} from "react-scroll-parallax";
import './App.css';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <MainPage />
      </div>
    </ParallaxProvider>
  );
}

export default App;
