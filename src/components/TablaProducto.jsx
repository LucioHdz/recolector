import React from 'react'
// import { API } from './constants'

const TablaProducto = ({ productos,eliminar }) => {
    
    return (
        <table className="table table-success table-striped mt-2">
            <thead>
                <tr>
                    <th>Nombre de producto</th>
                    <th>Precio</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {productos.map((producto,key) => (
                    <tr key={key}>
                        <td>{producto.nombre_producto}</td>
                        <td> ${producto.precio}</td>
                        <td><button className='btn btn-danger' onClick={()=>{
                            eliminar(producto.id_producto);
                        }}>Eliminar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TablaProducto