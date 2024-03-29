import { UI } from "./UI.js";

export class Search {
  constructor() {
    this.showSearchInputs();
    document
      .querySelector("#searchByName")
      .addEventListener("input", (e) => this.searchByName(e.target.value));
    document
      .querySelector("#searchByLetter")
      .addEventListener("input", (e) => this.searchByLetter(e.target.value));
    this.ui = new UI();
  }

  showSearchInputs() {
    document.querySelector("#display").innerHTML = "";
    $("#searchContainer").removeClass("d-none");
  }

  async searchByName(name) {
    document.querySelector("#display").innerHTML = "";
    $(".main-loading").fadeIn(300);

    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    let res = await data.json();
      if(res.meals == null) {
        document.querySelector("#display").innerHTML = "<h4 class='alert alert-danger w-50 m-auto text-center' role='alert'>Can't Find Anything</h4>"
      } else {
        this.ui.logUi(res.meals);
      }
    $(".main-loading").fadeOut(300);
  }

  async searchByLetter(letter) {
    $(".main-loading").fadeIn(300);

    let data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
    );
    let res = await data.json();
    if(res.meals == null) {
      document.querySelector("#display").innerHTML = "<h4 class='alert alert-danger w-50 m-auto text-center' role='alert'>Can't Find Anything</h4>"
    } else {
      this.ui.logUi(res.meals);
    }

    // response.meals ? displayMeals(response.meals) : displayMeals([])
    $(".main-loading").fadeOut(300);
  }
}
