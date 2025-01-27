import { services, extraServices } from "./data.mjs";

//------------------------Form overlay display hidden/flex--------------------------------
const button = document.querySelectorAll(".quote-button");
const formSection = document.getElementById("form");
const exit = document.querySelector(".exit-wrapper");

exit.addEventListener("click", () => {
  if (formSection.style.display === "none") {
    formSection.style.display = "flex";
  } else {
    formSection.style.display = "none";
  }
});
button.forEach((button) => {
  button.addEventListener("click", () => {
    if (formSection.style.display === "none") {
      formSection.style.display = "flex";
    } else {
      formSection.style.display = "none";
    }
  });
});
//---------------------------Inject data for service sections-------------------------------
const servicesContainer = document.querySelector(".services-container");
const topRow = document.querySelector(".top-row");
const bottomRow = document.querySelector(".bottom-row");
const extraRow = document.querySelector(".extra-services-wrapper");

let serviceItemArray = services.map((item) => {
  const serviceItem = document.createElement("div");
  serviceItem.setAttribute("class", "service-item");
  const h3 = document.createElement("h3");
  h3.innerHTML = `${item.title}`;
  serviceItem.append(h3);
  const description = document.createElement("p");
  description.append(item.description);
  serviceItem.append(description);
  return serviceItem;
});

for (let i = 0; i <= serviceItemArray.length; i++) {
  if (i <= 2) {
    topRow.append(serviceItemArray[i]);
  } else if (i <= 5) {
    bottomRow.append(serviceItemArray[i]);
  }
}

extraServices.forEach((item) => {
  const serviceItem = document.createElement("div");
  serviceItem.setAttribute("class", "service-item");
  const h3 = document.createElement("h3");
  h3.innerHTML = `${item.title}`;
  serviceItem.append(h3);
  const description = document.createElement("p");
  description.append(item.description);
  serviceItem.append(description);
  extraRow.append(serviceItem);
});
