const nomes = ["Maria Fernanda", "Kauã", "Maria Eduarda", "Paulo", "Gustavo", "Matheus", "  Gustava"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)