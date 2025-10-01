import './App.css'
import Navber from './app/common/Navber'
import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './app/routes/Routes'






function App() {

  return (
    <>
      <Navber/>
      <RoutesApp/>
    </>
  )
}

export default App
