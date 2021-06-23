import { Home } from './pages/Home'
import {NewRoom} from './pages/NewRoom'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Route path="/" component={Home} />
    <Route path="/" component={NewRoom} />
    </BrowserRouter>
      );
}

export default App;
