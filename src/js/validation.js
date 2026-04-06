// Módulo para validação de entrada
export const Validation = {
    validateUsername(username) {
        if (!username) {
            throw new Error("Digite um nome de usuário do GitHub para pesquisar.");
        }
        return username;
    }
};