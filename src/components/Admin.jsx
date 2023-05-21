import React, { useEffect, useState } from 'react'
import NuevoProducto from './NuevoProducto';
import TablaProducto from './TablaProducto';
import { API } from './constants';
import TablaPedidos from './TablaPedidos';

const Admin = ({ setIsAdmin, productos, actualizarProductos }) => {
    const eliminar = async (id)=>{
        fetch(`${API}/productos/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json'
            }
        })
        actualizarProductos();
    }
    


    return (
        <div className='mt-4 d-flex wrap col-12 flex-column justify-content-center align-items-center'>
            <NuevoProducto actualizar={actualizarProductos}/>
            <div className='d-flex col-8'>
                <TablaProducto  productos={productos} eliminar = {eliminar} />
            </div>
            <h2 className='col-12 text-center mt-5'>Pedidios</h2>
            <div className='col-12 d-flex justify-content-center mb-5'>
                <TablaPedidos/>
            </div>
        </div>
    )
}

export default Admin