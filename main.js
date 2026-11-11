
// 1.
const cimElem = document.getElementById("focim");
cimElem.textContent="Mátrix rendszer";

// 2.
const statuszElemek = document.getElementsByClassName("statusz-szoveg");

// 3.
console.log(statuszElemek.length);

// 4.
statuszElemek[0].textContent = "Rendszer ellenőrzése folyamatban...";

// 5. 
statuszElemek[1].textContent = "Kapcsolódás a hálózathoz...";

// 6.
const listaElemek = document.querySelectorAll(".lista-elem");


//7.
console.log(listaElemek[0])

