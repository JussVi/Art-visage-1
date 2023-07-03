import React from 'react';
import MainPage from "./pages/MainPage";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import './App.css';

function App() {
  return (
      <div className="App">
          <Header />
          <MainPage />
          <Footer />
      </div>
  );
}

export default App;
