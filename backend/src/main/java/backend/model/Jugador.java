package backend.model;

public class Jugador {
    private int id;
    private String nombre;

    // contructor
    public Jugador (int id, String nombre){
        this.id = id;
        this.nombre = nombre;
    }

    // Getters
    public String getNombre(){
        return this.nombre;
    }

    public int getId(){
        return this.id;
    }
}