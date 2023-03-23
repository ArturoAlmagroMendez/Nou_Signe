class HeaderComponent extends HTMLElement {
  
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    render() {
      // Método que genera el código HTML del componente
      this.shadowRoot.innerHTML = `
      <style>
        /* Estilos del componente */
      </style>
      <header>
        <div class="header-icon">
            <picture class="logo">
                <a href="#"><img src="/img/logo2.png" alt="Logo de la Web" /></a>
            </picture>
        </div>
        <nav>
            <div class="nav-list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div class="nav-button">
            <button id="checkout">Comprar</button>
        </div>
      </header>
    `;
  }
  
  connectedCallback() {
    this.render();  

  }
  disconnectedCallback() {
    // Método que se ejecuta cuando el componente se elimina del DOM
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    // Método que se ejecuta cuando se cambia un atributo del componente
  }
    
  }
  
  customElements.define("header-component", HeaderComponent);