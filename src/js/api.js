// Módulo para chamadas da API do GitHub
export const API = {
    baseUrl: "https://api.github.com",

    async fetchUser(username) {
        const response = await fetch(`${this.baseUrl}/users/${username}`);
        if (!response.ok) {
            throw new Error("Usuário não encontrado");
        }
        return await response.json();
    },

    async fetchRepos(username) {
        const response = await fetch(`${this.baseUrl}/users/${username}/repos?per_page=10&sort=created`);
        if (!response.ok) {
            throw new Error("Erro ao buscar repositórios");
        }
        return await response.json();
    }
};

