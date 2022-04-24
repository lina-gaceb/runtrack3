"use strict";

document.addEventListener("DOMContentLoaded", function loader() {
  function addone() {
    var key = document.getElementById("keylogger");
    document.addEventListener("keydown", (event) => {
      var name = event.key;
      var code = event.code;
      key.value = event.key;
      console.log(`Key pressed ${name} \r\n Key code value: ${code}`);
    });
  }

  addone();
});
