import React, { useState } from 'react';
import { API } from './constants';

const NuevoProducto = ({ actualizar }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const nuevo = async(e) => {
        e.preventDefault();
        try {
            const newProduct = await fetch(`${API}/productos/`,{
                method:'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body:JSON.stringify({nombre:productName,precio:productPrice})
            })
            actualizar();
            setProductName('');
            setProductPrice('');
        } catch (error) {
            alert('No se pudo agregar el producto, intenta de nuevo')
        }

    }


    return (
        <form className='p-2 col-12 d-flex flex-wrap' onSubmit={nuevo}>
            <div className="mb-3 col-6">
                <label htmlFor="product-name" className="form-label">Nombre del producto:</label>
                <input type="text" className="form-control" id="product-name" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </div>
            <div className="mb-3 col-6">
                <label htmlFor="product-price" className="form-label">Precio del producto:</label>
                <input type="number" className="form-control" id="product-price" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary col-12" >Guardar</button>
        </form>
    );
};

export default NuevoProducto;
