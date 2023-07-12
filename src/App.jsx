
import './App.css';
import Header from './components/Header/Header';
import WinningBar from './components/WinningBar/WinningBar';
import RulleteBlock from './components/RulleteBlock/RulleteBlock';
import OnlineUsers from './components/OnlineUser/OnlineUsers';
import VideoPlayer from './components/WinningNumber/WinningNumber';
function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <div className='main'>
          <WinningBar />
          <div className="chat_and_winning_num">
            <VideoPlayer />
            <RulleteBlock />
          </div>
          <OnlineUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
