const followerStats = [
    ["/img/icon-facebook.svg", "@nathanf", "1987", "/img/icon-up.svg", "12 Today"],
    ["/img/icon-twitter.svg", "@nathanf", "1044", "/img/icon-up.svg", "99 Today"],
    ["/img/icon-instagram.svg", "@realnathanf", "11k", "/img/icon-up.svg", "1099 Today"],
    ["/img/icon-youtube.svg", "Nathan F.", "8239", "/img/icon-down.svg", "144 Today"]
]

const overviewStats = [
    ["Page Views", "87", "/img/icon-facebook.svg", "/img/icon-up.svg", "3%"],
    ["Likes", "52", "/img/icon-facebook.svg", "/img/icon-down.svg", "2%"],
    ["Likes", "5462", "/img/icon-instagram.svg", "/img/icon-up.svg", "2257%"],
    ["Profile Views", "52k", "/img/icon-instagram.svg", "/img/icon-up.svg", "1375%"],
    ["Retweets", "117", "/img/icon-twitter.svg", "/img/icon-up.svg", "303%"],
    ["Likes", "507", "/img/icon-twitter.svg", "/img/icon-up.svg", "553%"],
    ["Likes", "107", "/img/icon-youtube.svg", "/img/icon-down.svg", "19%"],
    ["Total Views", "1407", "/img/icon-youtube.svg", "/img/icon-down.svg", "12%"]
]

class FollowerCard extends HTMLElement {
    constructor(){
        super();
    }
    get icon(){return this.getAttribute("icon");}
    get accountName(){return this.getAttribute("accountName");}
    get followersNumber(){return this.getAttribute("followersNumber");}
    get arrow(){return this.getAttribute("arrow");}
    get statusPercentage(){return this.getAttribute("statusPercentage");}

    set icon(value){this.setAttribute("icon", value);}
    set accountName(value){this.setAttribute("accountName", value);}
    set followersNumber(value){this.setAttribute("followersNumber", value);}
    set arrow(value){this.setAttribute("arrow", value);}
    set statusPercentage(value){this.setAttribute("statusPercentage", value);}

    static get observedAttribute(){ return["icon", "accountName", "followersNumber", "arrow", "statusPercentage"]}

    attributeChangedCallback(){
        this.render();
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.innerHTML = `
        <div class="account-info">
        <img src="${this.icon}">
        <span class="account-name">${this.accountName}</span>
        </div>
        <span class="followers-number">${this.followersNumber}</span>
        <span class="follwers-text">${this.followersText}</span>
        <img src="${arrow}">
        <span class="status-percentage">${this.statusPercentage}</span>
        `
    }
}

window.customElements.define('followers-card', FollowerCard);


// window.customElements.define("tag", class );