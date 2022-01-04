class App extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Test</h2>`;
    }
}

customElements.define('my-app', App);
const app = document.createElement('my-app');
document.getElementById('root').appendChild(app);
