const readline = require('readline');

class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        if (this.tipo == "mago"){
            console.log(`O ${this.nome} que é um ${this.tipo} atacou usando magia!`);
        }else if (this.tipo == "guerreiro"){
            console.log(`O ${this.nome} que é um ${this.tipo} atacou usando espada!`);
        }else if (this.tipo == "monge"){
            console.log(`O ${this.nome} que é um ${this.tipo} atacou usando artes marciais!`);
        }else if (this.tipo == "ninja"){
            console.log(`O ${this.nome} que é um ${this.tipo} atacou usando shuriken!`);
        }   
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a idade do herói: ', (idade) => {
        rl.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ', (tipo) => {
            let hero = new Hero(nome, idade, tipo);
            hero.atacar();
            rl.close();
        });
    });
});