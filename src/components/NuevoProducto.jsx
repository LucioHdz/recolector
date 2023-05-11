import React, { useState } from 'react';

const NuevoProducto = ({ productos, setProductos }) => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const nuevo = (e) => {
        e.preventDefault();
        const newProduct = { [productName]: { precioKilo: productPrice } };
        setProductos({ ...productos, ...newProduct });
        setProductName('');
        setProductPrice('');

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
