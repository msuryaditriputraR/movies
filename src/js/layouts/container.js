import defineElement from '../helper/defineElement';

class Container extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.classList.add('container');
    }
}
defineElement('my-container', Container);
export default 'my-container';
