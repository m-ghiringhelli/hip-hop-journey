import { useState } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App() {
  const [show, setShow] = useState(false);
  

  return (
    <div className="App">
      <Header show={show} setShow={setShow} />
      <Auth show={show} setShow={setShow} />
      <Body />
    </div>
  );
}

export default App;
