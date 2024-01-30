import { Search } from "./searchAPI.js";
import { Categories } from "./caregortiesAPI.js";
import { AreaAPI } from "./AreaAPI.js";
import { Ingredients } from "./ingredients.js";
import { Contact } from "./contact.js";
import { CategotryApi } from "./landing.js";

export class Aside {
  constructor() {
    new CategotryApi()
    this.openAndClose();
    this.displayLinks();
  }

  openSideNav() {
    $("aside").animate({ left: 0 }, 600);
    $(".btnIcon").removeClass("fa-align-justify").addClass("fa-x");
    for (let i = 0; i < 5; i++) {
      $(".links li").eq(i).animate({ top: 0 }, (i + 5) * 100);
    }
  }

  closeSideNav() {
    let boxWidth = $("aside .data").innerWidth();
    $("aside").animate({ left: `-${boxWidth}px` }, 500);
    $(".btnIcon").addClass("fa-align-justify").removeClass("fa-x");
    $(".links li").animate({ top: 300 }, 500);
  }

  openAndClose() {
    $(".btnIcon").on("click", () => {
      if ($("aside").css("left") == "0px") {
        this.closeSideNav();
      } else {
        this.openSideNav();
      }
    });
  }

  displayLinks() {
    let links = document.querySelectorAll(".links li a");
    links.forEach(e => {
      e.addEventListener("click", () => {
        if (e.innerHTML == "Search") {
          this.closeSideNav();
          new Search();
        } else if (e.innerHTML == "Categories") {
          this.closeSideNav();
          new Categories();
        } else if (e.innerHTML == "Area") {
          this.closeSideNav();
          new AreaAPI();
        } else if (e.innerHTML == "Ingredients") {
          this.closeSideNav();
          new Ingredients();
        } else if (e.innerHTML == "Contact Us") {
          this.closeSideNav();
          new Contact();
        }
      });
    });
  }
}
