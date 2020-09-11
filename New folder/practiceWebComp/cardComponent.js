class CardComponent extends HTMLElement {
    constructor(){
        super();
        this.title = null;
        this.subTitle = null;
        this.paragraph = null;
    }

}

window.customElements.define("card", CardComponent);