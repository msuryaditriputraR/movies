import defineElement from './helper/defineElement';
import '../scss/main.scss';
class App extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<h2>Test BEde</h2>`;
    }
}

const app = defineElement('app', App);
document.body.appendChild(app);
