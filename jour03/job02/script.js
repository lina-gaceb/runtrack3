let shuffle = function () {
  let array = [0, 1, 2, 3, 4, 5];
  array = array.sort(() => Math.random() - 0.5); // Array sort qui permet de ranger un tableau en random pour rendre tout aléatoire
  return array;
};

// Melange les images dans la div melangees
$("#button").on("click", function () {
  let allPics = $("#rangees img"); // Récupere tout les images avec IMG de la div rangée
  let shuffleArray = shuffle(); // Utilise la fonction shuffle du dessus
  for (let i = 0; i < shuffleArray.length; i++) {
    let pic = allPics[shuffleArray[i]];
    $("#melangees").append(pic); // Envoie les images dans melangees
  }
});
var pics = $(".arc"); // Je récupere toute les images avec la classe arc

// Quand on clique sur une des image

pics.on("click", function () {
  // IMPORTANT attr permet de récup les attribut ici This fait reference à l'image cliqué
  //On récupere donc l'Id de l'element de classe .arc cliqué
  let picID = $(this).attr("id");
  //Je récupere le format et je l'append dans la div rangée
  $("#rangees").append($("#" + picID));
  // Control final
  if ($("#rangees > img").length === 6) {
    if (
      $("#rangees img:first-child").attr("id") === "arc1" &&
      $("#rangees img:nth-child(2)").attr("id") === "arc2" &&
      $("#rangees img:nth-child(3)").attr("id") === "arc3" &&
      $("#rangees img:nth-child(4)").attr("id") === "arc4" &&
      $("#rangees img:nth-child(5)").attr("id") === "arc5" &&
      $("#rangees img:nth-child(6)").attr("id") === "arc6"
    ) {
      $("#rangees").after("<p>Vous avez gagné!</p>").addClass("green");
      $("p").css("color", "green");
    } else {
      $("#rangees").after("<p>Vous avez perdu!</p>");
      $("p").css("color", "red");
    }
  }
});
