import { UI } from "./UI.js"


export class Categories {
  constructor() {
    $("#searchContainer").addClass("d-none")
    $(".main-loading").fadeIn("0")
    this.getCategories()
    this.ui = new UI()
  }

  async getCategories() {
    document.querySelector("#display").innerHTML = ""
    $(".main-loading").fadeIn(300)

    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let res  = await data.json()
    this.ui.displayCategory(res.categories);
    this.getCategoryName()
    $(".main-loading").fadeOut(300)

}

  getCategoryName() {
    let cards = document.querySelectorAll(".meal");
    cards.forEach(e => {
      e.addEventListener("click", () => {
        $(".main-loading").fadeIn();
        this.getCategoryNameApi(e.getAttribute("data-name"))
      })
    })
  }


  async getCategoryNameApi(name) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
    let res  = await data.json()
    this.ui.logUi(res.meals)
    $('.main-loading').fadeOut(300);
  }
}