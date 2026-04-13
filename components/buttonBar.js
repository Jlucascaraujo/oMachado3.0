class ButtonBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.loadContentFromFile('buttonBar.html');
    }

    async loadContentFromFile(components) {
        try {
            const response = await fetch(components);
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const htmlText = await response.text();
            this.shadowRoot.innerHTML = htmlText;
        } catch(error) {
            console.error('Erro ao carregar o arquivo HTML externo:', error);
            this.shadowRoot.innerHTML = `<p>Erro carregando conteúdo: ${error.message}</p>`;
        }
    }

}

customElements.define('button-bar', ButtonBar);