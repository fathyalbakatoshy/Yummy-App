import { Search } from "./searchAPI.js";
import { Categories } from "./caregortiesAPI.js";
import { AreaAPI } from "./AreaAPI.js";
import { Ingredients } from "./ingredients.js";
import { Contact } from "./contact.js";

export class Aside {
  constructor() {
    this.openAndClose()
    this.displayLinks()
  }

openSideNav() {
  $("aside").animate({left: 0}, 600)
  $(".btnIcon").removeClass("fa-align-justify");
  $(".btnIcon").addClass("fa-x");
  for (let i = 0; i < 5; i++) {
    $(".links li").eq(i).animate({top: 0}, (i + 5) * 100)
  }
}

closeSideNav() {
  let boxWidth = $("aside .data").outerWidth()
  $("aside").animate({
      left: -boxWidth
  }, 500)

  $(".btnIcon").addClass("fa-align-justify");
  $(".btnIcon").removeClass("fa-x");


  $(".links li").animate({
      top: 300
  }, 500)
}

openAndClose() {
    $(".btnIcon").on("click", () => {
      if($("aside").css("left") == "0px") {
        this.closeSideNav()
      } else {
        this.openSideNav()
      }
    })
}

  displayLinks() {
    let links = document.querySelectorAll(".links li a");
    links.forEach(e => {
      e.addEventListener("click",  () => {
        if(e.innerHTML == "Search") {
          this.closeSideNav()
          new Search()
        } else if (e.innerHTML == "Categories") {
          this.closeSideNav()
          new Categories()
        } else if (e.innerHTML == "Area") {
          this.closeSideNav()
          new AreaAPI()
        } else if (e.innerHTML == "Ingredients") {
          this.closeSideNav()
          new Ingredients()
        } else if (e.innerHTML == "Contact Us") {
          this.closeSideNav()
          new Contact()
        }
      })
    })
  }

}

