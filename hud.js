$(document).ready(function(){

  // Get the hud div
  var $hud = $("div.hud");

  // Add splash screen with instructions to front page
  var $splash = $("<div>").addClass("splash");
  
  // Add score box to hud
  var $score = $("<div>").addClass("score");
  $hud.append($score)

  // Add lives box to hud
  var $lives = $("<div>").addClass("lives");
  var $livesText = $("<div>").addClass("lives-text").html("LIVES:  ")
  var $livesCount = $("<div>").addClass("lives-count")
  $lives.append($livesText)
  $lives.append($livesCount)
  $hud.append($lives)


})
