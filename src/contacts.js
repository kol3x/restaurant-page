export default function contacts() {
  const heading = document.createElement("h1");
  heading.innerHTML = "Contacts";
  const content = document.querySelector("div#content");
  content.append(heading);
}
