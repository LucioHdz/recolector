import React from 'react'

const TablaProducto = ({ productos }) => {
    return (
        <table className="table table-success table-striped mt-2">
            <thead>
                <tr>
                    <th>Nombre de producto</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(productos).map(([nombre, { precioKilo }]) => (
                    <tr key={nombre}>
                        <td>{nombre}</td>
                        <td> ${precioKilo} .00</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TablaProducto