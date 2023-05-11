import React from 'react'
import NuevoProducto from './NuevoProducto';
import TablaProducto from './TablaProducto';

const Admin = ({ setIsAdmin, productos, setProductos }) => {
    const cerrarSesion = () => {
        setIsAdmin('2');
    }




    return (
        <div className='mt-4 d-flex wrap col-12 flex-column'>
            <NuevoProducto setProductos={setProductos } productos={productos}/>
            <div className='d-flex'>
                <TablaProducto  productos={productos} />

            </div>
        </div>
    )
}

export default Admin