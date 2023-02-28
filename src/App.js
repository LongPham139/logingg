import logo from './logo.svg';
import './App.css';
import {authentication} from "./firebase-config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const signInWithGoogle=() =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider) .then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signInWithGoogle}>
          Click me
        </button>
      </header>
    </div>
  );
}

export default App;
