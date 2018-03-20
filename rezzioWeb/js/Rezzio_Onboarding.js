// JavaScript Document




//POPUP
$("#open-HS").click(function() {
$("#popup-form-HS").removeClass("hidden");
$("#popup-form-HS").addClass("show");

//SHUT DOWN
$("Submit").click(function() {
$("#popup-form-HS").removeClass("show");
$("#popup-form-HS").addClass("hidden");
});
});

