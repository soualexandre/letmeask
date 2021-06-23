import { Home } from './pages/Home'
import {NewRoom} from './pages/NewRoom'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <NewRoom/>
    <Home/>
    </BrowserRouter>
      );
}

export default App;
