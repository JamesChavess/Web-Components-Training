const template = document.createElement("template");

template.innerHTML = `
    <style>
    *{
        text-align:center;
        font-family:fantasy;
    }
    .user-card img{
        float: left;
        box-shadow: 3px 8px 3px gray;
        border: 2px solid gold;
    }
    .user-card {
        background-color: lightblue;
    }
    h3 {
        color: coral;
    }
    button {
        padding : 10px;
        margin : 20px;
        border-radous: 3px;
        box-shadow: 2px 10px 3px gray;
        font-size: 15px;
      }
    </style>
    <div class="user-card">
        <img/>
        <div>
        <h3></h3>
        <div class="info">
        <p> <slot name="email"/> </p>
        <p> <slot name="phone"/>  </p>
        </div>
        <button id="toggle-info"> hide info </button>
        </div>
    </div>
`;

class UserCard extends HTMLElement {
  constructor() {
    super();

    this.showInfo = true;

    this.attachShadow({ mode: "open" });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.shadowRoot.querySelector("h3").innerText = this.getAttribute("name");

    this.shadowRoot.querySelector("img").src = this.getAttribute("avatar");
  }

  toggleInfo(){
      this.showInfo = !this.showInfo;
      const info = this.shadowRoot.querySelector('.info');
      const toggleBtn = this.shadowRoot.querySelector('.toggle-info');

      if (this.showInfo) {
          info.style.display = 'block';
          toggleBtn.innerText = 'hide-info';
      }else{
        info.style.display = 'none';
        toggleBtn.innerText = 'show-info';
      }
  }

  connectedCallback(){
      this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo());
  }
  disconnectedCallback(){
    this.shadowRoot.querySelector('#toggle-info').removeEventListener();
}
}

window.customElements.define("user-card", UserCard);
