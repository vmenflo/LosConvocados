

export default function Login(){
    return(
        <div id="vista_login">
            <h2>¿Quién juega hoy?</h2>
            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="Introduce tu email"/>
                <label htmlFor="password">contraseña</label>
                <input type="password" name="password" id="password" placeholder="Contraseña"/>
                <button type="submit">Entrar</button>
            </form>
            <span>
                ¿Aún no tienes cuenta? 
                <a href="...">Regístrate</a>
            </span>
        </div>
    )
}