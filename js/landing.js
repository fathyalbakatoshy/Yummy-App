import { UI } from "./UI.js";

export class CategotryApi{
  constructor() {
    this.getCategories()
  }

async getCategories() {
  let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
  let res = await data.json()
  let ui = new UI()
  ui.logUi(res.meals)
  $("#searchContainer").addClass("d-none")
  $(".main-loading").fadeOut(500)
  $(".loading").fadeOut(500)

}


}