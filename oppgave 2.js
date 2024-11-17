var element = document.getElementById("Velkommen");

element.textContent = "Hei, student!";

var knapp = document.getElementById("knapp");

knapp.addEventListener("click", function () {
  element.style.color = "blue";
});

var texts = ["Banana", "Lemon", "makeitmeme"];

function addItem() {
  var newItem = document.createElement("li");

  var randomText = texts[Math.floor(Math.random() * texts.length)];

  newItem.textContent = randomText;

  var list = document.getElementById("list");
  list.appendChild(newItem);
}

var button = document.getElementById("addButton");
button.addEventListener("click", addItem);

function removeItem() {
  var list = document.getElementById("list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

var remove = document.getElementById("remove");
remove.addEventListener("click", removeItem);
