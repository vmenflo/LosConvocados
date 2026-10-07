import { useParams } from 'react-router-dom'
import { useState } from 'react'


type Jugador = {
    "id": number,
    "nombre": string,

}

export default function Deporte(){

    const { deporte } = useParams()

    const [jugadores, setJugadores] = useState <Jugador[]> ([
        {"id": 1, "nombre": "Víctor"},
        {"id": 2, "nombre": "Juan"},
        {"id": 3, "nombre": "Daniel"}
    ])

    const [nuevoJugador, setNuevoJugador] = useState<string>("")

    function agregarJugador() {

        const jugador_añadido = {"id":jugadores.length+1, "nombre":nuevoJugador}

        setJugadores([...jugadores,jugador_añadido])
    }

    return(
        <div>
        
            { deporte === "futbol" ?
            <div>
                <p>Jugadores</p>
                {jugadores.map((e)=> 
                    <p key={e.id}>{e.nombre}</p>
                )}

                <div>
                    <p>Introducir nuevo jugador:</p>
                    <input type="text" placeholder="Introduce nuevo jugador" onChange={(event) => setNuevoJugador(event.target.value)}/>
                    <button onClick={agregarJugador} >Añadir</button>
                </div>
            </div>
            :
            <p>Entras por Baloncesto</p> }

        </div>
    )
}