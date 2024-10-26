import { playRacerEngine } from "./playRacerEngine.js";
import { declareWinner } from "./declareWinner.js";

import { rl } from "./rl.js";
import { escolherPersonagem } from "./personagens.js";
import { getEntrada } from "./getEntrada.js";


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

