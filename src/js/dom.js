// Módulo para manipulação do DOM
export const DOM = {
    elements: {
        input: document.getElementById("input-search"),
        button: document.getElementById("btn-search"),
        profileResults: document.querySelector(".profile-results")
    },

    getInputValue() {
        return this.elements.input.value.trim();
    },

    clearResults() {
        this.elements.profileResults.innerHTML = "";
    },

    showLoading() {
        this.elements.profileResults.innerHTML = `<p class="loading">Carregando...</p>`;
    },

    renderProfile(data, repos = []) {
        const reposHtml = this.renderRepos(repos);

        this.elements.profileResults.innerHTML = `
            <div class="profile-card">
                <img src="${data.avatar_url}" alt="Avatar de ${data.name}" class="profile-avatar">
                <div class="profile-info">
                    <h2>${data.name}</h2>
                    <p>${data.bio || 'Não possui bio cadastrada 😢.'}</p>
                    <p>Seguidores: ${data.followers}</p>
                    <p>Seguindo: ${data.following}</p>
                </div>
            </div>
            ${reposHtml}
        `;
    },

    renderRepos(repos) {
        if (!repos || repos.length === 0) {
            return `
                <div class="profile-repositories">
                    <h3>Últimos repositórios</h3>
                    <p>Nenhum repositório encontrado.</p>
                </div>
            `;
        }

        const reposList = repos.map(repo => `
            <div class="repository-card">
                <h3>${repo.name}</h3>
                <div class="repository-stats">
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                    <span>👀 ${repo.watchers_count}</span>
                    <span>👨‍💻 ${repo.language || 'Não especificado'}</span>
                </div>
            </div>
        `).join("");

        return `
            <div class="profile-repositories">
                <h3>Últimos repositórios</h3>
                <div class="repositories">
                    ${reposList}
                </div>
            </div>
        `;
    }
};