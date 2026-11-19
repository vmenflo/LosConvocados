package backend.controller;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class SaludoController {

    @GetMapping("/api/saludo")
    public String saludar (){
        String saludo = "Hola a todos desde LosConvocados BackEnd";
        return saludo;
    }
    
}