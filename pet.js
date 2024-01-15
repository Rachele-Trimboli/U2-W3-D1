class pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  ownerIsTheSame(otherOwner) {
    if (this.ownerName == otherOwner.ownerName) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}

const petArray = [];
const formButton = document.getElementsByTagName("form button");
const nome = document.getElementById("name");
const padrone = document.getElementById("ownerName");
const specie = document.getElementById("species");
const razza = document.getElementById("razza");
const cards = document.getElementById("cards");
const form = document.getElementsByTagName("form")[0];
const generalPet = new pet(
  nome.value,
  padrone.value,
  specie.value,
  razza.value
);

const rowFunction = function () {
  const card = document.createElement("div");
  card.classList.add("col-12");
  card.innerHTML = "";
  for (let i = 0; i < petArray.length; i++) {
    card.innerHTML = `
        <div class="card">
  <div class="card-header">
    Partecipante
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">${nome.value}</li>
  <li class="list-group-item">${padrone.value}</li>
  <li class="list-group-item">${specie.value}</li>
  <li class="list-group-item">${razza.value}</li>
  </ul>
  </div>`;
    cards.appendChild(card);
  }
  nome.value = "";
  padrone.value = "";
  specie.value = "";
  razza.value = "";
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  petArray.push(generalPet);
  console.log(petArray);
  rowFunction();
});
