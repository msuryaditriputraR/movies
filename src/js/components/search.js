import defineElement from '../helper/defineElement';
import icon from './icon';

class Search extends HTMLElement {
    connectedCallback() {
        this.placeholder = this.getAttribute('placeholder') || '';
        this.render();
    }

    render() {
        this.innerHTML = `
            <input type="text" placeholder="${this.placeholder}" class="search-input">
            <${icon} class="search-icon" icon="bx bx-search-alt-2"></${icon}>
        `;
    }
}
defineElement('my-search', Search);
export default 'my-search';
