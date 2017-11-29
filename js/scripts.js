$(document).ready(function() { // when the document is loaded
  $("#formOne").submit(function(event) { // when the form with the id formOne is submitted

    var person1Input = $("input#person1").val(); //create a variable called person1Input with the content of what was in the field with the id person1

    $(".person1").text(person1Input.toUpperCase()); //give the html tag that carries the class .person1 the text of the variable person1Input but uppercase that word first.

    $("#story").show(); //then, show the html element that carries the id "story"

    event.preventDefault(); //do not refresh page

  });
});
