const input = document.getElementById("input-search");
const button = document.getElementById("btn-search");
const baseUrl = "https://api.github.com";
const profileResults = document.querySelector(".profile-results");

async function buscarUsuario() {
    const userName = input.value.trim();

    if (userName) {
        try {
            // Mostrar estado de carregamento
            profileResults.innerHTML = `<p class="loading">Carregando...</p>`;

            const response = await fetch(`${baseUrl}/users/${userName}`)
            if (!response.ok) {
                profileResults.innerHTML = "";
                alert("Usuário não encontrado. Tente novamente.");
                return;
            }
            const data = await response.json();
            console.log(data);

            profileResults.innerHTML = `
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

        } catch (error) {
            profileResults.innerHTML = "";
            console.error("Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
            alert("Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
        }
    }
    else {
        alert("Digite um nome de usuário do GitHub para pesquisar.");
    }
}

button.addEventListener("click", buscarUsuario);

input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        buscarUsuario();
    }
});

