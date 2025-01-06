class hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if (this.tipo == "mago"){
            console.log(`${this.tipo} atacou usando magia!`);
        }else if (this.tipo == "guerreiro"){
            console.log(`${this.tipo} atacou usando espada!`);
        }else if (this.tipo == "monge"){
            console.log(`${this.tipo} atacou usando artes marciais!`);
        }else if (this.tipo == "ninja"){
            console.log(`${this.tipo} atacou usando shuriken!`);
        }   
    }
}

let hero1 = new hero("Gandalf", 1000, "mago");
let hero2 = new hero("Aragorn", 100, "guerreiro");
let hero3 = new hero("Bruce Lee", 80, "monge"); 
let hero4 = new hero("Naruto", 20, "ninja");

hero1.atacar();

hero4.atacar();