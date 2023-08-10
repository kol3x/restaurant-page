import Image1 from "./1.jpg";
import Image2 from "./2.jpg";
import Image3 from "./3.jpg";
import Image4 from "./4.jpg";

export default function main() {
  // Add the heading
  const heading = document.createElement("h1");
  heading.innerHTML = "Bored restaurant";

  // Add the description
  const description = document.createElement("p");
  description.innerHTML =
    "Welcome to our Arabic restaurant, where we provide an authentic MiddleEastern dining experience. " +
    "Indulge in aromatic spices, succulent grilledmeats, and flavorful traditional dishes " +
    "that are sure to take your tastebuds on a culinary journey. " +
    "Our warm and inviting ambiance, combined with our passionate staff, " +
    "ensures you leave with a satisfied palate anda memorable dining experience.";

  // Create images div and add 4 images
  const imageDiv = document.createElement("div");
  imageDiv.classList.add("images");

  const image1 = new Image();
  const image2 = new Image();
  const image3 = new Image();
  const image4 = new Image();
  image1.src = Image1;
  image2.src = Image2;
  image3.src = Image3;
  image4.src = Image4;

  imageDiv.append(image1, image2, image3, image4);

  const content = document.querySelector("div#content");
  content.append(heading, imageDiv, description);
}
