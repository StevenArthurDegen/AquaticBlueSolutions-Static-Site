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
//-------------------------Code for Emailjs-------------------------
const form = document.querySelector(".form-info");
const fullName = document.getElementById("fullname");
const service = document.getElementById("service");
const address = document.getElementById("address");
const address2 = document.getElementById("address2");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const country = document.getElementById("country");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

const serviceID = "Aquatic Blue Solutions";
const templateID = "template_ec43cvj";
const publicKey = "UntkcSkBXTRHFlamo";

emailjs.init(publicKey);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputData = {
    to_name: "Aquatic Blue Solutions",
    user_name: fullName.value,
    selected_service: service.value,
    user_address: address.value,
    user_address2: address2.value,
    user_city: city.value,
    user_state: state.value,
    user_zip: zip.value,
    user_country: country.value,
    user_email: email.value,
    user_phone: phone.value,
    user_message: message.value,
  };
  emailjs.send(serviceID, templateID, inputData).then(
    () => {
      fullName.value = "";
      service.value = "";
      address.value = "";
      address2.value = "";
      city.value = "";
      state.value = "";
      zip.value = "";
      country.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";

      alert("Form has been sent!");
    },
    (er) => {
      console.log(er);
    }
  );
});
