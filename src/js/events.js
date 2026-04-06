// Módulo para gerenciamento de eventos
import { DOM } from './dom.js';

export const Events = {
    init(searchFunction) {
        const { input, button } = DOM.elements;

        button.addEventListener("click", searchFunction);
        input.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                searchFunction();
            }
        });
    }
};