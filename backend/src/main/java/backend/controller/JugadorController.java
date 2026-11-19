package backend.controller;

import backend.model.Jugador;
import java.util.List;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class JugadorController{

    @GetMapping("/api/jugadores")
    public List<Jugador> obtenerJugador(){

        Jugador jugador1 = new Jugador(1, "Víctor");
        Jugador jugador2 = new Jugador(2, "Juan");
        Jugador jugador3 = new Jugador(3, "Daniel");

        List<Jugador> listaJugadores = List.of(jugador1,jugador2,jugador3);
        return listaJugadores;
    }

}