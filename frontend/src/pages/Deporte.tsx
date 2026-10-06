
import { useParams } from 'react-router-dom'


export default function Home(){

    const { deporte } = useParams()


    return(
        <div>
        
            { deporte === "futbol" ? <p>Entras por futbol</p>: <p>Entras por Baloncesto</p> }

        </div>
    )
}