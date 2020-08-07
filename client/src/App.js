import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Container from './components/Container';
import NavBarContainer from './components/NavBarContainer';

function App() {
  return (
    <div className='App'>
      <NavBarContainer />
      <Container />
    </div>
  );
}

export default App;
