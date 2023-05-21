import React, { useEffect, useState } from 'react'
import { API } from './constants';

const TablaPedidos = () => {
    const [datos,setDatos] = useState([]);


    const actualizar = async()=>{
        const datosraw = await fetch(`${API}/pedidos/`);
        const datosd = await datosraw.json();
        setDatos(datosd);
    }

    const eliminar = async(id)=>{
        try{
            const datosraw = await fetch(`${API}/pedidos/${id}`,{method:'Delete'});
            const datosd = await datosraw.json();
            actualizar();
        }catch (err){
            console.log(err)
        }

    }

    useEffect(()=>{
        actualizar();
    },[])

    return (
        <div className='col-8 text-light'>
            <button className='btn btn-success col-12 mb-2' onClick={actualizar}>Actualizar</button>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Producto</th>
                        <th scope="col">KG</th>
                        <th scope="col">Total</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Transporte</th>
                        <th scope="col">Contacto</th>
                        <th scope="col">Opciones</th>

                    </tr>
                </thead>
                <tbody>
                    {datos.map((dato,index)=>(
                        <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{dato.nombre_usuario}</td>
                        <td>{dato.nombre_producto}</td>
                        <td>{dato.cantidad}kg</td>
                        <td>${dato.total}</td>
                        <td>{dato.fecha_pedido.split('T')[0]}</td>
                        <td>{dato.nombre_transporte}</td>
                        <td>{dato.no_contacto}</td>
                        <td><button className='btn btn-danger' onClick={(e)=>eliminar(dato.id_pedido)}>Finalizar</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TablaPedidos