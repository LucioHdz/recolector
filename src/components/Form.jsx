import React, { useState } from 'react';
import { API } from './constants';




function FormLogin({ setIsAdmin ,setIdUsuario}) {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');


    const validarUsuario = async (e) => {
        e.preventDefault()
        //valida e usuario ingresado y su contraseña
        const rowdata = fetch(`${API}/usuarios/buscar/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ usuario: usuario, contrasena: contrasena })
        })

        const usuarios = await (await rowdata).json();





        if (usuarios[0][0] && usuarios[0][0].contrasena_usuario === contrasena) {
            setIsAdmin(usuarios[0][0].id_permiso);
            setIdUsuario(usuarios[0][0].id_usuario)
        }
    }


    const Registrarse = async()=>{
        const raw = await fetch(`${API}/usuarios/registrar`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                usuario:usuario,
                password:contrasena
            })
        })
        const data = await raw.json();
        alert('Usuario creado correctamente');
    }


    return (
        <>
            <h3 className="card-title text-center mb-2 mt-5">Iniciar sesión</h3>
            <form className='col-9 '>
                <div className="form-group mb-2 text-center">
                    <label htmlFor="text">Usuario</label>
                    <input required type="text" className="form-control text-center" id="text" placeholder="Ingresa tu nombre de usuario"
                        onChange={e => { setUsuario(e.target.value) }} />
                </div>
                <div className="form-group mb-2 text-center">
                    <label htmlFor="password">Contraseña</label>
                    <input required type="password" className="form-control text-center" id="password" placeholder="Ingresa tu contraseña"
                        onChange={e => setContrasena(e.target.value)} />
                </div>
                <button type="submit" onClick={validarUsuario} className="btn btn-success btn-block col-12">Iniciar sesión</button>
            </form>
            <h3 className="card-title text-center mb-1 mt-5">O registrate</h3>
            <form className='col-9 mt-2'>
                <div className="form-group mb-2 text-center">
                    <label htmlFor="text">Usuario</label>
                    <input required type="text" className="form-control text-center" id="text" placeholder="Ingresa tu nombre de usuario"
                        onChange={e => { setUsuario(e.target.value) }} />
                </div>
                <div className="form-group mb-2 text-center">
                    <label htmlFor="password">Contraseña</label>
                    <input required type="password" className="form-control text-center" id="password" placeholder="Ingresa tu contraseña"
                        onChange={e => setContrasena(e.target.value)} />
                </div>
                <button type="button" onClick={Registrarse} className="btn btn-success btn-block col-12">Registrarse</button>
            </form>
        </>
    );
}

export default FormLogin;
