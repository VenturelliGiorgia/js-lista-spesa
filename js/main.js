const listaSpesa = ["pane", "mele", "banane", "latte"];
const paragrafo = document.getElementById("lista");
let i = 0;
do {
    console.log(listaSpesa[i]);
    paragrafo.innerHTML += "<li>" + listaSpesa[i] + "</li>";
    i++;
} while (i < listaSpesa.length)