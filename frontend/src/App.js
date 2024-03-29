import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import QuizContainer from './components/QuizContainer';
import QuizContainerGold from './components/QuizContainerGold';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizContainer />} />
        <Route path="/concours" element={<QuizContainerGold />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
  </Router>
  );
}

export default App;


