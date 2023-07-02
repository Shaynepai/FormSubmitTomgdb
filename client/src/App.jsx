
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './pages/Register'

function App() {


  return (
    <>
      <Routes>
        <Route>
          <Route path='/' element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
