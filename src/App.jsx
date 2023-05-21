import './App.css'
import Header from './components/Header'
import FormLogin from './components/Form'
import { useEffect, useState } from 'react'
import Admin from './components/Admin';
import Cliente from './components/Cliente';
import { API } from './components/constants';

function App() {
  const [isAdmin, setIsAdmin] = useState('2');
  const [idUsuario, setIdUsuario] = useState('2');
  const [productos,setProductos] = useState([]);
    
  const actualizarProductos = async()=>{
    const datosRaw = await fetch(`${API}/productos`)
    const datos = await datosRaw.json();
    setProductos(datos);
}


  useEffect(()=>{
    actualizarProductos()
  },[])



  return (
    <div className="container-fluid">
      <Header />
      <div className="d-flex flex-column justify-content-center align-items-center m-0">
        {
          isAdmin === '2' ? (
            <FormLogin setIsAdmin={setIsAdmin} setIdUsuario={setIdUsuario} />
          ) : isAdmin === 1 ? (
            <Admin setIsAdmin={setIsAdmin} productos={productos}  actualizarProductos={actualizarProductos} />
          ) : isAdmin === 2 ?
            (
              <Cliente  productos={productos} idUsuario = {idUsuario} />
            ) :
            null
        }





      </div>
    </div>
  )
}

export default App
