import React from 'react';
import MainPage from "./pages/MainPage";
import CoursesPage from './pages/CoursesPage';
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import {Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/courses" component={CoursesPage} />
        </Switch>
        {/*<Footer />*/}
      </div>
  );
}

export default App;
