import '../css/login-registro.css'
import { Link, useNavigate } from 'react-router-dom'
import type { FormEvent } from 'react'




export default function Login(){
    
const navigate = useNavigate()

    
function handleSubmit(event: FormEvent<HTMLFormElement>) {   event.preventDefault()
   navigate("/home")
}

    return(
        <div className="vista-login-registro">
            <h2 className="titulo-login-registro">¿Quién juega hoy?</h2>
            <form className="form-login-registro" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Introduce tu email" className="campo-form"/>
                <label htmlFor="password">contraseña</label>
                <input type="password" name="password" id="password" placeholder="Contraseña" className="campo-form"/>
                <button type="submit" id="boton-login">Entrar</button>
            </form>
            <span id="registrar">
                ¿Aún no tienes cuenta? 
                <Link to="/registro">Registro</Link>
            </span>
        </div>
    )
}