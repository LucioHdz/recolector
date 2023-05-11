import React, { useState } from 'react';

function FormLogin({ setIsAdmin }) {
    const usuarios = {
        'andrea': {
            pass: '123',
            permiso: 1
        },
        'cliente': {
            pass: '123',
            permiso: 0
        }
    }
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');


    const validarUsuario = (e) => {
        e.preventDefault()
        //valida e usuario ingresado y su contraseña
        if(usuarios[usuario] && usuarios[usuario].pass === contrasena){
            setIsAdmin(usuarios[usuario].permiso);
        }
    }


    return (
        <>
            <h3 className="card-title text-center mb-5 mt-5">Iniciar sesión</h3>
            <form className='col-4 mt-5'>
                <div className="form-group mb-2 text-center">
                    <label htmlFor="text">Usuario</label>
                    <input type="text" className="form-control text-center" id="text" placeholder="Ingresa tu nombre d eusuario"
                        onChange={e => { setUsuario(e.target.value) }} />
                </div>
                <div className="form-group mb-2 text-center">
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" className="form-control text-center" id="password" placeholder="Ingresa tu contraseña"
                        onChange={e => setContrasena(e.target.value)} />
                </div>
                <button type="submit" onClick={validarUsuario} className="btn btn-success btn-block col-12">Iniciar sesión</button>
            </form>
        </>
    );
}

export default FormLogin;
