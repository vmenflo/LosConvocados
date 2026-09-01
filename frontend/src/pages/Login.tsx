import '../App.css'
import '../css/login.css'


export default function Login(){
    return(
        <div id="vista_login">
            <h2 id="titulo-login">¿Quién juega hoy?</h2>
            <form id="form-login">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Introduce tu email" className="campo-form"/>
                <label htmlFor="password">contraseña</label>
                <input type="password" name="password" id="password" placeholder="Contraseña" className="campo-form"/>
                <button type="submit" id="boton-login">Entrar</button>
            </form>
            <span id="registrar">
                ¿Aún no tienes cuenta? 
                <a href="/Registro">Regístrate</a>
            </span>
        </div>
    )
}