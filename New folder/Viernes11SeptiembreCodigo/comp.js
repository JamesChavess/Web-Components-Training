const followerStats = [
    [
      "/img/icon-facebook.svg",
      "@nathanf",
      "1987",
      "FOLLOWERS",
      "/img/icon-up.svg",
      "12 Today",
    ],
    [
      "/img/icon-twitter.svg",
      "@nathanf",
      "1044",
      "FOLLOWERS",
      "/img/icon-up.svg",
      "99 Today",
    ],
    [
      "/img/icon-instagram.svg",
      "@realnathanf",
      "11k",
      "FOLLOWERS",
      "/img/icon-up.svg",
      "1099 Today",
    ],
    [
      "/img/icon-youtube.svg",
      "Nathan F.",
      "8239",
      "FOLLOWERS",
      "/img/icon-down.svg",
      "144 Today",
    ],
  ];
  
  const overviewStats = [
    ["Page Views", "87", "/img/icon-facebook.svg", "/img/icon-up.svg", "3%"],
    ["Likes", "52", "/img/icon-facebook.svg", "/img/icon-down.svg", "2%"],
    ["Likes", "5462", "/img/icon-instagram.svg", "/img/icon-up.svg", "2257%"],
    [
      "Profile Views",
      "52k",
      "/img/icon-instagram.svg",
      "/img/icon-up.svg",
      "1375%",
    ],
    ["Retweets", "117", "/img/icon-twitter.svg", "/img/icon-up.svg", "303%"],
    ["Likes", "507", "/img/icon-twitter.svg", "/img/icon-up.svg", "553%"],
    ["Likes", "107", "/img/icon-youtube.svg", "/img/icon-down.svg", "19%"],
    ["Total Views", "1407", "/img/icon-youtube.svg", "/img/icon-down.svg", "12%"],
  ];
  
  class FollowerCard extends HTMLElement {
    constructor() {
      super();
    }
    get icon() {
      return this.getAttribute("icon");
    }
    get accountName() {
      return this.getAttribute("accountName");
    }
    get followersNumber() {
      return this.getAttribute("followersNumber");
    }
    get followersText() {
      return this.getAttribute("followersText");
    }
    get arrow() {
      return this.getAttribute("arrow");
    }
    get statusPercentage() {
      return this.getAttribute("statusPercentage");
    }
  
    set icon(value) {
      this.setAttribute("icon", value);
    }
    set accountName(value) {
      this.setAttribute("accountName", value);
    }
    set followersNumber(value) {
      this.setAttribute("followersNumber", value);
    }
    set followersText(value) {
      return this.setAttribute("followersText", value);
    }
    set arrow(value) {
      this.setAttribute("arrow", value);
    }
    set statusPercentage(value) {
      this.setAttribute("statusPercentage", value);
    }
  
    static get observedAttributes() {
      return [
        "icon",
        "accountName",
        "followersNumber",
        "followersText",
        "arrow",
        "statusPercentage",
      ];
    }
  
    attributeChangedCallback() {
      this.render();
    }
  
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
              <div class="account-info">
          
              <img src="${this.icon}">
              <span class="account-name">${this.accountName}</span>
              </div>
              <div class="followers">
              <span class="followers-number">${this.followersNumber}</span>
              <span class="followers-text">${this.followersText}</span>
              </div>
              <div class="status">
              <img src="${this.arrow}">
              <span class="status-percentage">${this.statusPercentage}</span>\
              </div>
          `;
    }
  }
  
  window.customElements.define("followers-card", FollowerCard);
  
  function renderCards() {
    const followerAttributes = [
      "icon",
      "accountName",
      "followersNumber",
      "followersText",
      "arrow",
      "statusPercentage",
    ];
    console.log(followerAttributes);
  
    const followerCards = document.querySelectorAll(".follow-card");
  
    followerCards.forEach((card) => console.log(card));
  
    followerStats.forEach((item, i) => {
      let currentElement = followerCards[i];
      item.forEach((element, j) => {
        currentElement.setAttribute(followerAttributes[j], element);
      });
    });
  }
  renderCards();
  