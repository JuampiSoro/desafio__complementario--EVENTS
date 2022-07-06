// // DECLARO VARIABLES -- EN ESTE CASO SERIAN ELEMENTOS

const div = document.querySelector("#container");
const h1 = document.getElementById("h1");
const input = document.getElementById("mensaje");
const btn = document.querySelector("#btn");
let valorInput = "";
// localStorage.clear();


btn.addEventListener('click', function () {
    valorInput = input.value;
    console.log(valorInput);
    valorInput = localStorage.setItem("Valor", valorInput);
    input.value = "";


});

