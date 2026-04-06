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

    renderProfile(data) {
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
        `;
    }
};