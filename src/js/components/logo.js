import defineElement from '../helper/defineElement';

class Logo extends HTMLElement {
    connectedCallback() {
        this.alt = this.getAttribute('alt') || '';
        this.src = this.getAttribute('src') || '';
        this.href = this.getAttribute('href') || '#';
        this.render();
    }

    render() {
        this.innerHTML = `
        <a href="${this.href}">
            <img src="${this.src}" alt="${this.alt}" class="logo">
        </a>`;
    }
}

defineElement('my-logo', Logo);
export default 'my-logo';
