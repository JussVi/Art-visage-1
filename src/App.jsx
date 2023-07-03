import React from 'react';
import MainPage from "./pages/MainPage";
import CoursesPage from './pages/CoursesPage';
import {ParallaxProvider} from "react-scroll-parallax";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/courses" component={CoursesPage} />
        </Switch>
      </div>
    </ParallaxProvider>
  );
}

export default App;
