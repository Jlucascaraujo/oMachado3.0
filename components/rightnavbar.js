class RightNavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <nav>
            <h1>Navegação</h1>
            <h2>Sobre mim</h2>
                <ul>
                    <li><a href="">review do mês</a></li>
                    <li><a href="">recomendações</a></li>
                    <li><a href="">contantos</a></li>
                </ul>
        </nav>
        `
    }
}

customElements.define('right-nav-bar', RightNavBar);