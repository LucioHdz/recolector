import React, { useEffect, useState } from 'react'
import { API } from './constants';

const Cliente = ({ productos, idUsuario }) => {
    const [kg, setKg] = useState(10);
    const [total, setTotal] = useState(0);
    const [direccion, setDireccion] = useState(0);
    const [contacto, setContacto] = useState('');
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);


    const [venta, setVenta] = useState([]);
    const actualizar = async () => {
        const datarow = await fetch(`${API}/pedidos/${idUsuario}`);
        const data = await datarow.json();
        setVenta(data)
    }

    useEffect(() => {
        actualizar();
    }, [])



    const vender = async () => {
        // e.preventDefaut();
        if (kg >= 10) {
            alert(`Orden de compra: \nProducto: ${productoSeleccionado.nombre_producto}\nKG a vender: ${kg}kg\nTotal: $${total}\nDireccion:${direccion}\nContacto:${contacto} `)
            alert('se te contactara para acordar la hora y transporte asignado por el que se ira por el producto')
            setTotal(kg * productoSeleccionado.precio)
            const datos = {
                usuario: idUsuario,
                producto: productoSeleccionado.id_producto,
                cantidad: kg,
                total: kg * productoSeleccionado.precio,
                fecha: 'Now()',
                transporte: kg <= 100 ? 2 : kg <= 200 ? 1 : 3,
                contacto: contacto
            }
            fetch(`${API}/pedidos`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(datos)
            }).then((res) => res.json()).then(res => {
                console.log(res)
                alert('Pedido Realizado, en las siguentes Horas nos coantactaremos contigo :3')
                actualizar();
            })
                .catch((err) => {
                    alert('No fue posible realizar el pedidio')
                })





        } else {
            alert("No se puede realizar tu compra debido que los kg son menores a 10kg")
        }
    }




    return (
        <>
            <div className='d-flex col-12 flex-column  p-3 rounded-bottom shadow' style={{ 'backgroundColor': '#126229' }}>
                <h2 className='text-light'>Deseas vender algun producto como PET o Carton</h2>
                <p className='text-light'>Llena los siguientes campos y nosotros iremos por ellos</p>
                <form className='col-12 d-flex flex-wrap x '
                    onSubmit={(e) => {
                        e.preventDefault();
                        vender();
                    }}
                >
                    <div className="form-floating col-12 mb-3" >
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example" onChange={(e) => {
                            const dato = productos.filter((dato) => dato.id_producto == e.target.value);
                            console.log(dato[0])
                            setProductoSeleccionado(dato[0]);

                            setTotal(dato[0].precio * kg);

                        }}>
                            <option>Abre para seleccionar el producto a vender</option>
                            {productos.map((producto) => (
                                <option value={producto.id_producto}>{producto.nombre_producto}</option>
                            ))}
                        </select>
                        <label for="floatingSelect">Productos</label>
                    </div>
                    <div class="input-group col-5 mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Kg a vender</span>
                        <input onChange={(e) => setKg(parseInt(e.target.value))} required type="number" value={kg} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div class="input-group col-5 mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Direccion donde se recojera el producto</span>
                        <input onChange={e => setDireccion(e.target.value)} required type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <div class="input-group col-5">
                        <span class="input-group-text" id="inputGroup-sizing-lg">Numero de contacto</span>
                        <input onChange={e => setContacto(e.target.value)} required maxLength={10} type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                    </div>
                    <h2 className='text-warning mt-4'>Total ${total}</h2>
                    <button type="submit" class="btn btn-outline-light mt-4 col-12">Vender ahora</button>
                </form>




            </div>
            <h2 className='col-12 mt-5 mb-5 text-center'>Pedidos</h2>
            <div className="col-8">

                <table class="table table-info">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Producto</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Fecha Orden</th>
                            <th scope="col">Contacto</th>
                        </tr>
                    </thead>
                    <tbody>

                        {venta.map((pedido, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{pedido.nombre_producto}</td>
                                <td>{pedido.cantidad}</td>
                                <td>{pedido.total}</td>
                                <td>{pedido.fecha_pedido.split('T')[0]}</td>
                                <td>{pedido.no_contacto}</td>
                            </tr>
                        ))}



                    </tbody>
                </table>
            </div>



        </>
    )
}

export default Cliente