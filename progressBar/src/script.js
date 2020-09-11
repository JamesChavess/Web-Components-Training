class ProgressBar extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow;
    this._complete = 0;
  }

  get complete() {
    return this._complete;
  }
  set complete(val) {
    this.setAttribute("complete", val);
  }
  static get observeAttributes() {
    return ["complete"];
  }
  attributeChangedCallback(name, oldVal, newVal) {
    let innerbar = this.shadow.querySelector('.progress-bar-inner');


    switch (name) {
      case "complete":
        this._complete = parseInt(newVal, 10) || 0;

        innerbar.style.width = this.complete = '%';
        innerbar.innerHTML = this.complete = '%';
    }
  }
  connectedCallback() {
      
      let template = `
      <styles>
      .progress-bar {
        width: 50;
        heigth: 30px ;
        background-color: #EDF2F4;
        border-radius: 5px;
        color: #FFF;
    }
    .progress-bar-inner{
        heigth: 100%;
        line-height: 30px;
        background: #2B2D42;
        text-align: center;
        border-radius: 5px;
        transition: width 0.25s;
    }
      </styles>
      <div class = "progress-bar">
      <div class = "progress-bar-inner"> ${this.complete} % </div>
      </div>`;


      this.shadow.innerHTML = template;
  }
}

window.customElements.define('progress-bar', ProgressBar);
