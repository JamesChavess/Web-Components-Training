const followerStats = [
  [
    "/img/icon-facebook.svg", // esto se puede pintar dynamicamente desde un API
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
    "SUBSCRIBERS",
    "/img/icon-down.svg",
    "144 Today",
  ],
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

function renderFollowCards() {
  const followerAttributes = [
    "icon",
    "accountName",
    "followersNumber",
    "followersText",
    "arrow",
    "statusPercentage",
  ];

  const followerCards = document.querySelectorAll(".follow-card");

  followerStats.forEach((item, i) => {
    let currentElement = followerCards[i];
    item.forEach((element, j) => {
      currentElement.setAttribute(followerAttributes[j], element);
    });
  });
}
renderFollowCards();

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

class OverviewCards extends HTMLElement {
  constructor() {
    super();
  }
  get overviewTitle() {
    return this.getAttribute("overviewTitle");
  }
  get overviewNumber() {
    return this.getAttribute("overviewNumber");
  }
  get iconImg() {
    return this.getAttribute("iconImg");
  }
  get arrowIcon() {
    return this.getAttribute("arrowIcon");
  }
  get statusPercent() {
    return this.getAttribute("statusPercent");
  }

  set overviewTitle(value) {
    return this.setAttribute("overviewTitle");
  }
  set overviewNumber(value) {
    return this.setAttribute("overviewNumber");
  }
  set iconImg(value) {
    return this.setAttribute("iconImg");
  }
  set arrowIcon(value) {
    return this.setAttribute("arrowIcon");
  }
  set statusPercent(value) {
    return this.setAttribute("statusPercent");
  }

  static get observedAttributes() {
    return [
      "overviewTitle",
      "overviewNumber",
      "iconImg",
      "arrowIcon",
      "statusPercent",
    ];
  }
  attributeChangedCallback() {
    this.render2();
  }
  connectedCallback() {
    this.render2();
  }
  render2() {
    this.innerHTML = `
    <div class="overview-card">
                    <div class="overview-title">
                        <h5>${this.overviewTitle}</h5>
                        <img src="${this.iconImg}" alt="">
                    </div>
                    <div class="overview-info">
                        <span class="overview-number">${this.overviewNumber}</span>
                        <div class="status up">
                            <img src="${this.arrowIcon}" alt="">
                            <span class="status-percentage">${this.statusPercent}</span>
                        </div>
                    </div>
                </div>
    `;
  }
}
window.customElements.define("overview-card", OverviewCards);

function renderOverviewCards(){
  const overviewAttributes = [
    "overviewTitle",
      "overviewNumber",
      "iconImg",
      "arrowIcon",
      "statusPercent",
  ];
  const overviewCards = document.querySelectorAll(".overview-card");

  overviewStats.forEach((item, i) => {
    let currentElement = overviewCards[i];
    item.forEach((element, j) => {
      currentElement.setAttribute(overviewAttributes[j], element);
    })
  });
}
renderOverviewCards();
