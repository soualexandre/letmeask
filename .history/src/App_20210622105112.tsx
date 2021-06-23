import { BrowserRouter, Route } from 'react-router-dom'
import {createContext} from 'react'
import { Home } from './pages/Home'
import { NewRoom } from './pages/NewRoom'


export const AuthContext = createContext('');


function App() {
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
