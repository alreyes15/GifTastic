//Welcome to my take on gifTastic
//First, variables must be storted 
var tvShows = ["Game of Thrones", "Rick and Morty" ]

function renderButtons() {
    $("#tvShows-view").empty();
    for (var i = 0; i < tvShows.length; i++) {
        var a = $("<button>");
        a.addClass("movie");
        a.attr("data-name", tvShows[i]);
        a.text(tvShows[i]);
        $("#tvShow-view").append(a);
    }
}
  $("#aad-tvShow").on("click",function(event) {
      event.preventDefault();
      
      var show = $("#show-input").val().trim();
      tvShows.push(tvShows);
      renderButtons();
  });

  renderButtons