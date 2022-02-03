import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
