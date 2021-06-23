import {createContext, useState} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import {auth, firebase} from './services/firebase';


const TextContext = createContext('');


function App() {
  return (
    <BrowserRouter>
    <TextContext.Provider value={{value, setValue}}>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </TextContext.Provider>
    </BrowserRouter>
  );
}

export default App;
