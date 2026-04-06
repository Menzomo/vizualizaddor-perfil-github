// Importar módulos
import { DOM } from './dom.js';
import { API } from './api.js';
import { Validation } from './validation.js';
import { Events } from './events.js';

// Função principal de busca
export async function buscarUsuario() {
    try {
        const userName = Validation.validateUsername(DOM.getInputValue());

        DOM.showLoading();

        const data = await API.fetchUser(userName);
        console.log(data);

        DOM.renderProfile(data);

    } catch (error) {
        DOM.clearResults();

        if (error.message === "Digite um nome de usuário do GitHub para pesquisar.") {
            alert(error.message);
        } else if (error.message === "Usuário não encontrado") {
            alert("Usuário não encontrado. Tente novamente.");
        } else {
            console.error("Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
            alert("Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.");
        }
    }
}

// Inicializar aplicação
function init() {
    Events.init(buscarUsuario);
}

// Executar quando DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

