export const personagens = {
    MARIO:{
        NOME:"Mario",
        VELOCIDADE: 4,
        MANOBABILIDADE:3,
        PODER:3,
        PONTOS:0,
    },
    LUIGI:{
        NOME:"Luigi",
        VELOCIDADE: 3,
        MANOBABILIDADE:4,
        PODER:4,
        PONTOS:0,
    },
    PRINCESA:{
        NOME:"Princesa",
        VELOCIDADE: 2,
        MANOBABILIDADE:6,
        PODER:2,
        PONTOS:0,
    },
    KOPA:{
        NOME:"Kopas",
        VELOCIDADE: 3,
        MANOBABILIDADE:3,
        PODER:5,
        PONTOS:0,
    },
    BROWSER:{
        NOME:"Browser",
        VELOCIDADE: 6,
        MANOBABILIDADE:1,
        PODER:6,
        PONTOS:0,
    }

}
const { MARIO, LUIGI, PRINCESA, KOPA, BROWSER } = personagens;

export function escolherPersonagem(entrada) {
    switch (entrada) {
        case '1':
            return MARIO;
        case '2':
            return LUIGI;
        case '3':
            return PRINCESA;
        case '4':
            return KOPA;
        case '5':
            return BROWSER;
        default:
            console.log("Escolha inválida! Selecionando Mario como padrão.");
            return MARIO;
    }
}