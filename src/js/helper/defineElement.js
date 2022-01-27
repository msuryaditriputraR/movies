export default function defineElement(name, elem) {
    customElements.define(`${name}`, elem);
    return document.createElement(`${name}`);
}
