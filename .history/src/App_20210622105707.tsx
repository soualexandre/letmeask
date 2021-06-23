import {createContext, useState} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'
import { auth, firebase } from './services/firebase';

export const AuthContext = createContext('');


function App() {
  const [user, setUser] = useState();

  function signInWithGoogle(){
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(result => {
        console.log(result);
      })
  }
  return (
    <BrowserRouter>
    <AuthContext.Provider value={'text'}>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
