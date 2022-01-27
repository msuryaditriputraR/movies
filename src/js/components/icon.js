import defineElement from '../helper/defineElement';

class Icon extends HTMLElement {
    connectedCallback() {
        this.icon = this.getAttribute('icon') || '';
        this.render();
    }

    render() {
        this.innerHTML = `<i class='${this.icon}'></i>`;
    }
}

defineElement('my-icon', Icon);
export default 'my-icon';
