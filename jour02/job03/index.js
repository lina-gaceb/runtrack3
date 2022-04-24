"use strict";

document.addEventListener("DOMContentLoaded", function loader() {
  function addone() {
    var btn = document.querySelector("#button");
    var compteur = document.getElementById("compteur");
    var counter = 0;

    btn.addEventListener("click", () => {
      counter++;
      compteur.innerHTML = counter;
    });
  }

  addone();
});
