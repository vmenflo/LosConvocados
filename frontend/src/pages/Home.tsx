const deportes = ['Fútbol', 'Baloncesto']

export default function Home(){
    return(
        <div>

            {deportes.map((deporte, indice)=> (<div key={indice}>
                {deporte}
            </div>))
            }

        </div>
    )
}