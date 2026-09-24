import '../css/login-registro.css'



export default function Registro(){
    return(
        <div className='vista-login-registro'>
            <h2 className="titulo-login-registro">Bienvenido Jugón</h2>
            <form className="form-login-registro">
                 <label htmlFor="nombre">Nombre</label>
                <input name="nombre" id="nombre" placeholder="Introduce tu nombre" className="campo-form"/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Introduce tu email" className="campo-form"/>
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" placeholder="Contraseña" className="campo-form"/>
                <label htmlFor="repetir-password"> Repeta la contraseña</label>
                <input type="password" name="repetir-password" id="repetir-password" placeholder="Repita Contraseña" className="campo-form"/>
                <button type="submit" className="boton-login-registro">Registrar</button>
            </form>
        </div>
    )
}