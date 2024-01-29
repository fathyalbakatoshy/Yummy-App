import { Aside } from "./aside.js";
import { Details } from "./getDetails.js";

export class UI {
  constructor() {
    this.sideBar = new Aside();
  }

  getID() {
    let cards = document.querySelectorAll(".img");
    cards.forEach((e) => {
      e.addEventListener("click", () => {
        $("#searchContainer").addClass("d-none")
        let details = new Details();
        details.getApiFromId(e.getAttribute("data-id"));
      });
    });
  }

  logUi(list) {
    this.sideBar.closeSideNav()
    let data = ``;
    for (let i = 0; i < list.length; i++) {
      data += `
      <div class="col-lg-3 col-md-6">
          <div class="img" data-name="${list[i].strMeal}" data-id="${list[i].idMeal}">
            <img src="${list[i].strMealThumb}" class="w-100" alt="">
          </div>
        </div>
      
      `;
    }
    document.querySelector("#display").innerHTML = data;
    this.getID();
  }

  displayMealDetails(meal) {
    this.sideBar.closeSideNav()
    let ingredients = ``;

    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients += `<li class="alert alert-info m-2 p-1">${
          meal[`strMeasure${i}`]
        } ${meal[`strIngredient${i}`]}</li>`;
      }
    }

    let tags = meal.strTags?.split(",");

    if (!tags) tags = [];

    let tagsStr = "";
    for (let i = 0; i < tags.length; i++) {
      tagsStr += `
        <li class="alert alert-danger m-2 p-1">${tags[i]}</li>`;
    }

    let cartoona = `
    <div class="col-md-4 text-white">
                <img class="w-100 rounded-3" src="${meal.strMealThumb}"
                    alt="">
                    <h2>${meal.strMeal}</h2>
            </div>
            <div class="col-md-8 text-white">
                <h2>Instructions</h2>
                <p>${meal.strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${meal.strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${meal.strCategory}</h3>
                <h3>Recipes :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${ingredients}
                </ul>
                <h3>Tags :</h3>
                <ul class="list-unstyled d-flex g-3 flex-wrap">
                    ${tagsStr}
                </ul>
                <a target="_blank" href="${meal.strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>
            </div>`;

    document.querySelector("#display").innerHTML = cartoona;
  }

  displayCategory(list) {
    let data = "";
    for (let i = 0; i < list.length; i++) {
        data += `
        <div class="col-md-3 text-white">
                <div class="meal food position-relative overflow-hidden rounded-2 cursor-pointer" data-name="${list[i].strCategory}">
                    <img class="w-100" src="${list[i].strCategoryThumb}" alt="" >
                    <div class="layout position-absolute text-center text-black p-2">
                        <h3>${list[i].strCategory}</h3>
                        <p>${list[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
    }

    document.querySelector("#display").innerHTML = data
  }

  displayArea(list) {
    let data = "";
    for (let i = 0; i < list.length; i++) {
        data += `
        <div class="col-md-3 text-white" >
                <div class="meal rounded-2 text-center cursor-pointer" data-name="${list[i].strArea}">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${list[i].strArea}</h3>
                </div>
        </div>
        `
    }

    document.querySelector("#display").innerHTML = data

  }

  displayIntgrediens(list) {
    let data = "";
    for (let i = 0; i < list.length; i++) {
        data += `
        <div class="col-md-3 text-white">
                <div  class="meal rounded-2 text-center cursor-pointer" data-name="${list[i].strIngredient}">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${list[i].strIngredient}</h3>
                        <p>${list[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
                </div>
        </div>
        `
    }
    document.querySelector("#display").innerHTML = data
  }
}

