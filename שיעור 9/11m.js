const ROOT = document.getElementById("root");
const table = document.createElement("table");
const tr1 = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const tr2 = document.createElement("tr");
const td4 = document.createElement("td");
const td5 = document.createElement("td");
const td6 = document.createElement("td");
const tr3 = document.createElement("tr");
const td7 = document.createElement("td");
const td8 = document.createElement("td");
const td9 = document.createElement("td");
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
tr2.appendChild(td4);
tr2.appendChild(td5);
tr2.appendChild(td6);
tr3.appendChild(td7);
tr3.appendChild(td8);
tr3.appendChild(td9);
table.appendChild(tr1);
table.appendChild(tr2);
table.appendChild(tr3);
ROOT.appendChild(table);
let flag = "x";
const td_list = document.getElementsByTagName("td");
for (let i = 0; i < td_list.length; i++) {
  td_list[i].addEventListener("click", () => {
    if (td_list[i].textContent === "") {
      if (flag === "x") {
        flag = "o";
        td_list[i].textContent = "x";
        td_list[i].style.opacity = 0.5;
      } else if (flag === "o") {
        flag = "x";
        td_list[i].textContent = "o";
        td_list[i].style.opacity = 0.5;
      }
    }
    add(td_list, 0, 1, 2);
    add(td_list, 3, 4, 5);
    add(td_list, 6, 7, 8);
    add(td_list, 0, 3, 6);
    add(td_list, 1, 4, 7);
    add(td_list, 2, 5, 8);
    add(td_list, 0, 4, 8);
    add(td_list, 2, 4, 6);
  });
}
function add(td, i1, i2, i3) {
  line = td[i1].textContent + td[i2].textContent + td[i3].textContent;
  if (line === "xxx") {
    console.log("x wine");
  } else if (line === "ooo") {
    console.log("o wine");
  }
}