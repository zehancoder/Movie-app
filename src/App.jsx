import './App.css'
import Navber from './app/common/Navber'
import {BrowserRouter} from 'react-router-dom'
import RoutesApp from './app/routes/Routes'
import Animation from './GSAPanimation/Animation'





function App() {

  return (
    <>
      <Animation/>
      <Navber/>
      <RoutesApp/>
    </>
  )
}

export default App
