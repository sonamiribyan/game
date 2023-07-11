
import './App.css';
import Header from './components/Header/Header';
import WinningBar from './components/WinningBar/WinningBar';
import RulleteBlock from './components/RulleteBlock/RulleteBlock';
import OnlineUsers from './components/OnlineUser/OnlineUsers';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <WinningBar />
          <RulleteBlock />
          <OnlineUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
