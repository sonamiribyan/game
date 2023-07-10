
import './App.css';
import Header from './components/Header/Header';
import WinningBar from './components/WinningBar/WinningBar';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header></Header>
        <div className='main'>
          <WinningBar></WinningBar>
        </div>
      </div>
    </div>
  );
}

export default App;
