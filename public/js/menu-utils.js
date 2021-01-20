const BASE_URL = "http://localhost:3000";
// const BASE_URL = "http://fb26771f0972.ngrok.io";
// const BASE_URL = "https://selfish-moose-18.loca.lt";
// create dynamic menus
const addMenu = (menuName, options, callback, container = document) => {
  const previousMenuLabel = document.getElementById(menuName + "-label");
  let selector = document.getElementById(menuName + "-menu");
  if (!selector) {
    selector = document.createElement("div");
    selector.id = menuName + "-menu";
    document.body.appendChild(selector);
  }
  let Menu = document.createElement("select");
  if (previousMenuLabel || Menu) {
    selector.innerHTML = "";
  }
  Menu.name = menuName + "-selector";
  Menu.id = menuName + "-selector";
  let option = document.createElement("option");
  option.value = "";
  option.text = "Select " + menuName;
  Menu.appendChild(option);
  console.log(options);
  for (const currentOption in options) {
    let option = document.createElement("option");
    option.value = options[currentOption];
    option.text = currentOption;
    Menu.appendChild(option);
    // console.log(availableWorkspace);
  }
  let availableOptionsLabel = document.createElement("label");
  availableOptionsLabel.innerHTML = "Available " + menuName + " : ";
  availableOptionsLabel.htmlFor = menuName + "-selector";
  availableOptionsLabel.id = menuName + "-label";
  container
    .getElementById(menuName + "-menu")
    .appendChild(availableOptionsLabel)
    .appendChild(Menu);
  Menu.addEventListener("change", callback);
};
