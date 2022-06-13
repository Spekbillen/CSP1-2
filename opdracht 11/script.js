$(document).ready(function () {
  //opdracht b
  $("#show").click(function () {
    $("#div").fadeIn(500);
  });

  //opdracht b
  $("#hide").click(function () {
    $("#div").fadeOut(500);
  });

  //opdracht c
  $("#idclass").click(function () {
    $("#moretext.text2").css("color", randcol());
    $("#div1").find(".text1").css("color", randcol());
  });

  $('#extrarule').click(function () {
    $('#op-e .somediv').append("<b>added text</b>");
  })
});

//opdracht e1
function sall() {
  $("#op-e div")
    .css("background-color", randcol)
    .css("border", `dashed 2px ${randcol()}`);
}

//opracht e2
function adiv() {
  $("#op-e #somediv1")
    .html(random(12))
}



//random collor
function randcol() {
  let makeColorCode = "0123456789ABCDEF";
  let code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)];
  }
  return code;
}

const random = (length = 8) => {
  return Math.random().toString(16).substr(2, length);
};
