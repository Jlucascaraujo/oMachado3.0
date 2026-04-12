class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <p>Feito por José Lucas. Usando HTML, CSS e JavaScript (Angular é bom mas dificil demais, vc ta doido!).</p>
        `;
    }
}

customElements.define('footer-template', Footer);