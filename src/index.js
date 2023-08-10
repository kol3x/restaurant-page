import main from "./mainpage.js";
import menu from "./menu.js";
import contacts from "./contacts.js";
import "./styles.css";

main();

function clearPage() {
  const page = document.querySelector("div#content");
  page.innerHTML = "";
}

function openHome() {
  clearPage();
  main();
}

function openMenu() {
  clearPage();
  menu();
}

function openContacts() {
  clearPage();
  contacts();
}

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const contactsButton = document.querySelector("#contacts");

homeButton.addEventListener("click", openHome);
menuButton.addEventListener("click", openMenu);
contactsButton.addEventListener("click", openContacts);
