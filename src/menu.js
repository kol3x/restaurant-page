export default function menu() {
  // Heading
  const heading = document.createElement("h1");
  heading.innerHTML = "Menu";
  // Menu items
  const kebab = document.createElement("section");
  const kebabHeading = document.createElement("h2");
  kebabHeading.innerHTML = "Grilled Kebab";
  const kebabDescription = document.createElement("p");
  kebabDescription.innerHTML =
    "Tender, juicy pieces of marinated meat grilled to perfection over an open flame, served with a side of rice and salad.";
  kebab.append(kebabHeading, kebabDescription);
  kebab.classList.add("item");


  const shawerma = document.createElement("section");
  const shawermaHeading = document.createElement("h2");
  shawermaHeading.innerHTML = "Shawerma";
  const shawermaDescription = document.createElement("p");
  shawermaDescription.innerHTML =
    "Thinly sliced marinated meat wrapped in a warm pita bread with fresh vegetables, pickles, and a creamy garlic sauce.";
  shawerma.append(shawermaHeading, shawermaDescription);
  shawerma.classList.add("item");

  const feteer = document.createElement("section");
  const feteerHeading = document.createElement("h2");
  feteerHeading.innerHTML = "Feteer";
  const feteerDescription = document.createElement("p");
  feteerDescription.innerHTML =
    "Feteer, a flaky and crispy Egyptian pastry, filled with savory or sweet toppings such as cheese, meat, honey, or nuts.";
  feteer.append(feteerHeading, feteerDescription);
  feteer.classList.add("item");

  const hawawshi = document.createElement("section");
  const hawawshiHeading = document.createElement("h2");
  hawawshiHeading.innerHTML = "Hawawshi";
  const hawawshiDescription = document.createElement("p");
  hawawshiDescription.innerHTML =
    "Hawawshi, a delicious Egyptian street food consisting of spiced meat stuffed inside a pita bread and grilled to crispy perfection.";
  hawawshi.append(hawawshiHeading, hawawshiDescription);
  hawawshi.classList.add("item");

  const content = document.querySelector("div#content");
  content.append(heading);
  const menu = document.createElement('div');
  menu.append(kebab, feteer, shawerma, hawawshi);
  menu.classList.add("menu");
  content.append(menu);
}
