import { UI } from "./UI.js";

export class AreaAPI {
  constructor() {
  this.getAreaAPI()
  this.ui = new UI()
  }

  async getAreaAPI() {
    $('.loading').fadeIn(0);
    $("#searchContainer").addClass("d-none")
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    let res = await data.json()
    
    this.ui.displayArea(res.meals)
    $('.loading').fadeOut(300);
    this.getAreaName()
  }


  getAreaName() {
    let cards = document.querySelectorAll(".meal");
    cards.forEach(e => {
      e.addEventListener("click", () => {
        this.getAreaNameApi(e.getAttribute("data-name"))
      })
    })
  }


  async getAreaNameApi(name) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`)
    let res = await data.json()
    this.ui.logUi(res.meals)
  }

}