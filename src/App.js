import './App.css';
import FetchUser from './service/rando_user';
import {useState , useEffect} from 'react'
import {UserSummary} from "./components/UserSummary";
import {setState} from "expect";
function App() {
  const [currentUser, setCurrentUser] = useState('null');
  useEffect(() => {
    (async function fetchData() {
      let res = await FetchUser();
      setCurrentUser(res);
    })();
  }, [setCurrentUser])
  return (
    <div className="App">
      <h4>RANDOM USER APP</h4>
      <button onClick={refreshUser} className="refresh-user">REFRESH USER</button>
      <UserSummary userData={currentUser} />
    </div>);
  async function refreshUser() {
    let res = await FetchUser();
    setCurrentUser(res);
  }
}

export default App;