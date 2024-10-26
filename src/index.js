import { playRacerEngine } from "./playRacerEngine.js";
import { declareWinner } from "./declareWinner.js";
import readline from "readline";
import { escolherPersonagem } from "./personagens.js";









const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getEntrada(message) {
    return new Promise((resolve) => {
        rl.question(message, (entrada) => {
            resolve(entrada);
        });
    });
}

(async function main() {
    const entrada1 = await getEntrada("Escolha o personagem do player 1: \n1 - Mario\n2 - Luigi\n3 - Princesa\n4 - Kopa\n5 - Browser\n");
    const player1 = escolherPersonagem(entrada1);

    const entrada2 = await getEntrada("Escolha o personagem do player 2: \n1 - Mario\n2 - Luigi\n3 - Princesa\n4 - Kopa\n5 - Browser\n");
    const player2 = escolherPersonagem(entrada2);

    console.info(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`);
    
    await playRacerEngine(player1, player2);
    await declareWinner(player1, player2);
    rl.close();
})()

