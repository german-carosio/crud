import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Show from './components/Show/Show'
import Create from './components/Create/Create'
import Edit from './components/Edit/Edit'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Finanzas Personales</h1>
        {/* <NavBar /> */}
        <Routes>
          <Route path='/' element={<Show />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
