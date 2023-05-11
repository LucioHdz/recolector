import React, { useState } from 'react'

const Cliente = ({ setIsAdmin, productos }) => {
    const [kg,setKg] = useState(0);
    const cerrarSesion = () => {
        setIsAdmin('2');
    }


    const vender=()=>{
         
    }
    return (
        <div className='d-flex col-12 flex-column  p-3 rounded-bottom shadow'  style={{'backgroundColor':'#3e503c'}}>
            <h3 className='text-light'>Deseas vender algun producto como PET o Carton</h3>
            <p className='text-light'>Llena los siguientes campos y nosotros iremos por ellos</p>
            <form className='col-12 d-flex flex-wrap x ' >
                <div class="form-floating col-12 mb-3" >
                    <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                        <option selected>Abre para seleccionar el producto a vender</option>
                        {Object.entries(productos).map(([nombre, { precioKilo }]) => (
                            <option value={nombre}>{nombre}</option>
                        ))}
                    </select>
                    <label for="floatingSelect">Productos</label>
                </div>
                <div class="input-group col-5 mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Kg a vender</span>
                    <input type="number"  className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>
                <div class="input-group col-5">
                    <span class="input-group-text" id="inputGroup-sizing-lg">Direccion donde se recojera el producto</span>
                    <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>
                <button type="button" class="btn btn-outline-light mt-4 col-12">Vender ahora</button>
            </form>





        </div>
    )
}

export default Cliente