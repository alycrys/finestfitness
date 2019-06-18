import React from 'react';
import Header from './components/Header';
import About from './pages/About';
import Training from './pages/Training';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Training />
    </div>
  );
}

export default App;
