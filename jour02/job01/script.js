"use strict";

document.addEventListener("DOMContentLoaded", function loader() {
  function citation() {
    var btn = document.getElementById("button");
    var citation = document.getElementById("citation").innerHTML;

    btn.addEventListener("click", () => {
      console.log(citation);
    });
  }
  citation();
});
