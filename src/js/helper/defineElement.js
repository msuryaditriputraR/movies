export default function defineElement(name, elem) {
    customElements.define(`my-${name}`, elem);
    return document.createElement(`my-${name}`);
}
