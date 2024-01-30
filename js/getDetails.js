import { UI } from "./UI.js"
import { Aside } from "./aside.js"

export class Details{

  async getApiFromId(id) {
    $(".main-loading").fadeIn(300)
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let res = await data.json()
    let ui = new UI()
    ui.displayMealDetails(res.meals[0])
    $(".main-loading").fadeOut(300)
  }
} 