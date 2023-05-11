import './App.css'
import Header from './components/Header'
import FormLogin from './components/Form'
import { useState } from 'react'
import Admin from './components/Admin';
import Cliente from './components/Cliente';

function App() {
  const [isAdmin, setIsAdmin] = useState('2');


  const [productos, setProductos] = useState({ 'Carton': { precioKilo: 5 }, 'PET': { precioKilo: 2 }, 'Latas Aluminio': { precioKilo: 7 } })

  return (
    <div className="container-fluid">
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center">
        {
          isAdmin === '2' ? (
            <FormLogin setIsAdmin={setIsAdmin} />
          ) : isAdmin === 1 ? (
            <Admin setIsAdmin={setIsAdmin} productos={productos} setProductos={setProductos} />
          ) : isAdmin === 0 ?
            (
              <Cliente setIsAdmin={setIsAdmin} productos={productos} />
            ) :
            null
        }





      </div>
    </div>
  )
}

export default App
