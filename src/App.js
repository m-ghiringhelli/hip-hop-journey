import './App.css';
import Auth from './components/Auth/Auth';
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Auth />
      <Body />
    </div>
  );
}

export default App;
