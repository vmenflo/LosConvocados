import { Link } from 'react-router-dom'
const deportes = [{"id":1,"nombre":"Fútbol","url":"/deportes/futbol"},{"id":2,"nombre":"Baloncesto","url":"/deportes/baloncesto"}]


export default function Home(){


    return(
        <div>
            <h2>Deportes</h2>
            {deportes.map((deporte)=> (
                <div className="tarjeta_deportes" key={deporte.id}>
                    <Link to={deporte.url}>{deporte.nombre}</Link>
                 </div>))
            }

        </div>
    )
}