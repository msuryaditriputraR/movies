import defineElement from './helper/defineElement';

class App extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Test</h2>`;
    }
}

const app = defineElement('app', App);
document.getElementById('root').appendChild(app);
