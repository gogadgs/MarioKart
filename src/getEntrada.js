import { rl } from "./rl.js";
export function getEntrada(message) {
    return new Promise((resolve) => {
        rl.question(message, (entrada) => {
            resolve(entrada);
        });
    });
}