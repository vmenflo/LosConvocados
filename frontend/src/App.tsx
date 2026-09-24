import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Registro from './pages/Registro'

function App() {

  return (
    <>
      <main className="main">

        <Routes>

            <Route path="/login" element={<Login />} />
            
            <Route path="/registro" element={<Registro />} />

        </Routes>

      </main>
  
    </>
  )
}

export default App
