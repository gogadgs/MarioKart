import { rollDice } from "./rollDice.js";
import { getRandomBlock } from "./getRandonBlock.js";
import { logRollResult } from "./logRollResult.js";

export async function playRacerEngine(character1,character2){
    for(let round = 0 ;round <= 5;round++) {
            console.log(`🏁 Rodada ${round}`);
            
            let block = await getRandomBlock();
            console.log(`BLOCO ${block}`);
    

    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();


    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;
    

    if(block == "RETA"){
        totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
        totalTestSkill2 = diceResult2 + character2.VELOCIDADE;
        await logRollResult(character1.NOME,"VELOCIDADE : ", diceResult1,character1.VELOCIDADE);
        await logRollResult(character2.NOME,"VELOCIDADE : ", diceResult2,character2.VELOCIDADE);
        
    }else if(block == "CURVA"){
        totalTestSkill1 = diceResult1 + character1.MANOBABILIDADE;
        totalTestSkill2 = diceResult2 + character2.MANOBABILIDADE;
        await logRollResult(character1.NOME,"MANOBRABILIDADE : ", diceResult1,character1.MANOBABILIDADE);
        await logRollResult(character2.NOME,"MANOBRABILIDADE : ", diceResult2,character2.MANOBABILIDADE);
    
    
    }else if(block == "CONFRONTO"){
        let powerResult = diceResult1 + character1.PODER;
        let powerResult2 = diceResult2 + character2.PODER;
        console.log(`${character1.NOME} confrontou ${character2.NOME}🥊🥊`);

        await logRollResult(character1.NOME,"PODER : ", diceResult1,character1.PODER);
        await logRollResult(character2.NOME,"PODER : ", diceResult2,character2.PODER);
       
    if(powerResult>powerResult2 && character2.PONTOS > 0){
        console.log(`${character1.NOME} venceu o confronto ! ${character2.NOME} perdeu um ponto 🐢🐢`);
        character2--;
    }else if(powerResult2>powerResult && character1.PONTOS > 0){
        console.log(`${character2.NOME} venceu o confronto! ${character1.NOME} perdeu um ponto 🐢🐢`);
        character1--;

    }

   /*  character2.PONTOS -= powerResult>powerResult2 && character2.PONTOS > 0 ? 1:0;
    character1.PONTOS -= powerResult2>powerResult && character1.PONTOS > 0 ? 1:0; */
    console.log(powerResult == powerResult2 ? "CONFRONTO EMPATADO NENHUM PONTO FOI PERDIDO" :"");


/* 
        if(powerResult>powerResult2){
            if(character2.PONTOS>0){
                character2.PONTOS--;
            }
        };

        if(powerResult2>powerResult){
            if(character1.PONTOS>0){
                character1.PONTOS--;
            }
        };

        if(powerResult === powerResult2){
            console.log("CONFRONTO EMPATADO NENHUM PONTO FOI PERDIDO");
        }; */

    }


    if(totalTestSkill1> totalTestSkill2){
        console.log(`${character1.NOME} marcou um ponto!🏎️ 🫡 ✌️  `);
        character1.PONTOS++;
    }else if(totalTestSkill2 > totalTestSkill1){
            console.log(`${character2.NOME} marcou um ponto!🏎️ 🫡 ✌️  `)
            character2.PONTOS++;

        }

        console.log("-----------------------------------------------------------")
    
};
    


};