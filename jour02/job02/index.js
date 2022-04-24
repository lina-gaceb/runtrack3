"use strict";

document.addEventListener("DOMContentLoaded", function loader() {
  function showhide(id) {
    if (id.style.display === "none") {
      id.style.display = "block";
    } else {
      id.style.display = "none";
    }
  }

  function citation() {
    var btn = document.querySelector("#button");
    var citation = document.getElementById("citation");

    btn.addEventListener("click", () => {
      showhide(citation);
    });
  }

  citation();
});
