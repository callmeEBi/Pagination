let $ = document;
let usersWrapper = $.querySelector(".users_wrapper");
let numbersWrapper = $.querySelector(".numbers_wrapper");
let selectInput = $.querySelector("#input__select");
let itemsPerPage = 5;
let allUsers = [
  { id: 1, fullName: "Alvin Adams" },
  { id: 2, fullName: "Kate Stevens" },
  { id: 3, fullName: "Ricardo Watts" },
  { id: 4, fullName: "Rosie Cunningham" },
  { id: 5, fullName: "Francisco Lamb" },
  { id: 6, fullName: "Jorge Gordon" },
  { id: 7, fullName: "Evan Becker" },
  { id: 8, fullName: "Angel White" },
  { id: 9, fullName: "Angel White" },
  { id: 10, fullName: "Peter Simpson" },
  { id: 11, fullName: "Tommy Bowman" },
  { id: 12, fullName: "Bill Mitchell" },
  { id: 13, fullName: "Sadie Morris" },
  { id: 14, fullName: "Rosa Shaw" },
  { id: 15, fullName: "Susan Bowman" },
  { id: 16, fullName: "Jason Davis" },
  { id: 17, fullName: "Steven Kelley" },
  { id: 18, fullName: "Georgia Jordan" },
  { id: 19, fullName: "Addie Ortiz" },
  { id: 20, fullName: "Rena Williamson" },
  { id: 21, fullName: "Marvin Walsh" },
  { id: 22, fullName: "Harry Martinez" },
  { id: 23, fullName: "Marian Terry" },
];

function pagination(item) {
  let start = 0;
  let end;
  let userElement;
  if (item) {
    start = itemsPerPage * Number(item.innerHTML) - itemsPerPage;
  }
  end = start + itemsPerPage;
  usersWrapper.innerHTML = "";
  for (; start < end; start++) {
    if (allUsers[start]) {
      userElement = $.createElement("div");
      userElement.classList.add("user");
      userElement.textContent = `${allUsers[start]["id"]} - ${allUsers[start]["fullName"]}`;
      usersWrapper.append(userElement);
    }
  }
}

function createEnoughButton() {
  let numberOfButtons = Math.ceil(allUsers.length / itemsPerPage);
  let btn;
  numbersWrapper.textContent = "";
  for (let i = 1; i <= numberOfButtons; i++) {
    btn = $.createElement("div");
    btn.classList.add("number");
    btn.textContent = i;
    btn.addEventListener("click", function (event) {
      for (let i of $.querySelectorAll(".number")) {
        i.style.backgroundColor = "blue";
      }
      event.target.style.backgroundColor = "green";
      pagination(event.target);
    });
    numbersWrapper.append(btn);
  }
}

selectInput.addEventListener("input", function () {
  itemsPerPage = Number(selectInput.value);
  createEnoughButton();
  pagination();
});

createEnoughButton();
pagination();
