import { UI } from "./UI.js"

export class Ingredients{
  constructor() {
    this.getIngredientsAPI()
    this.ui = new UI()
  }


  async getIngredientsAPI() {
    $("#searchContainer").addClass("d-none")
    $('.main-loading').fadeIn();
    let data = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    let res = await data.json()
    this.ui.displayIntgrediens(res.meals.splice(0,20))
    $('.main-loading').fadeOut(300);
    this.showIngredientName()
  }


  showIngredientName() {
    let cards = document.querySelectorAll(".meal");
    cards.forEach(e => {
      e.addEventListener("click", () => {
        this.getIngredientsNameAPI(e.getAttribute("data-name"))
      })
    })
  }

  async getIngredientsNameAPI(name) {
    $('.main-loading').fadeIn();
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
    let res = await data.json()
    this.ui.logUi(res.meals.slice(0,20))
    $('.main-loading').fadeOut(300);
  }
}