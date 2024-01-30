import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import QuizContainer from './components/QuizContainer';
import QuizContainerGold from './components/QuizContainerGold';
import Login from './components/Login';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizContainer />} />
        <Route path="/concours" element={<QuizContainerGold />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
  </Router>
  );
}

export default App;


