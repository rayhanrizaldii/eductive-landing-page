import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/features/Header'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route element={<Home/>}  path='/'></Route>
    </Routes>
    
    </>
  )
}

export default App
