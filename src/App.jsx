
import './App.css';
import Header from './components/Header/Header';
import WinningBar from './components/WinningBar/WinningBar';
import RulleteBlock from './components/RulleteBlock/RulleteBlock';
import OnlineUsers from './components/OnlineUser/OnlineUsers';
import Login_form from './components/Login/Login';

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
        <div className="login">
          <Login_form />
        </div>
      </div>
    </div>
  );
}

export default App;
