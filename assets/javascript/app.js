//Welcome to my take on gifTastic
//First, variables must be storted 

var shows = ["Game of Thrones", "Rick and Morty", "The Good Doctor","The Big Bang Theory", "Empire", "South Park", "Narcos", "Cops","You","Brooklyn Nine-Nine", "Fresh Prince of Bel Air "  ]

function renderButtons() {

    $("#buttonsView").empty();

    for (var i = 0; i < shows.length; i++) {
        var a = $("<button>");
        a.addClass("show");
        a.attr("data-name",shows[i]);
        a.text(shows[i]);
        $("#buttonsView").append(a);
    }
}
  $("#addShow").on("click",function() {
      
      var show = $("#show-input").val().trim();
      shows.push(show);

      renderButtons();

      return false;

  })
 function displayGifs(){

    var show = $(this).attr("data-name");
    var jqueryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=dc6zaTOxFJmzC&limit=10";
    
    $.ajax({ 
        url: jqueryURL,
        method: "GET"})

      .done(function(response) {
          console.log(response.data);
          var results = response.data; 

    for (var i = 0; i < results.length; i++) {

     var gifDiv = $("<div class=gifs>");
     var showGif = $("<img>")

        showGif.attr("src", results[i].images.fixed_height_still.url);
        showGif.attr("title", "Rating: " + results[i].rating);
        showGif.attr("data-still", results[i].images.fixed_height_still.url);
        showGif.attr("data-state", "still");
        showGif.addClass("gif");
        showGif.attr("data-animate", results[i].images.fixed_height.url);

        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);

        
        gifDiv.append(showGif)
        
        $("#gifsView").prepend(gifDiv);

      }

    });
 }

 $(document).on('click', '.gif', function(){

     var state = $(this).attr('data-state');

        if ( state == 'still'){
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate')

        }else{
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');

        };
    
});

// function for displaying show gifs

$(document).on("click", ".show", displayGifs);

// initially calls the makeButtons function
renderButtons();