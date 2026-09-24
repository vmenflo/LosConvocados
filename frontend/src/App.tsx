import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'
import Home from './pages/Home'


function App() {

  return (
    <>
      <main className="main">

        <Routes>

            <Route path="/login" element={<Login />} />
            
            <Route path="/registro" element={<Registro />} />

            <Route path="/home" element={<Home />} />


        </Routes>

      </main>
  
    </>
  )
}

export default App
