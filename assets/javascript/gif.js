var cartoons = ['Spongebob', 'Futurama', 'South Park'];

function displayGif() {

    var show = $(this).attr("data-name");
    // console.log(show);
    // var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=2cbOR934j9f4PwJLNJwwHhYIE2XIDONd&tag="+show+"&limit=5";
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=2cbOR934j9f4PwJLNJwwHhYIE2XIDONd&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(response);

        for (var i = 0; i < response.data.length; i++){
            var gifDiv = $("<div>");
            var rating = $("<p>").text("Rating: " + results[i].rating); 

            var showGif = $("<img>");
            showGif.attr("src", results[i].images.fixed_height.url);
            // var imageUrl = results[i].image_original_url;
            // showGif.attr("src", imageUrl);
            showGif.attr("alt", "Gif Image of a cartoon");

            gifDiv.prepend(rating);
            gifDiv.prepend(showGif);


            $("#gifTarget").prepend(gifDiv);
        }

    });

}

function buttons(){
    
    $("#btnTarget").empty();

    for (var i = 0; i < cartoons.length; i++) {

        var btnDiv = $("<button>");
        btnDiv.addClass("showBtn");
        btnDiv.attr("data-name", cartoons[i]);
        btnDiv.text(cartoons[i]);
        $("#btnTarget").append(btnDiv);
    }

}

$("#toonBtn").on("click", function(event) {
    event.preventDefault();
    var show = $("#toonInput").val().trim();
    cartoons.push(show);
    buttons();
  });

$(document).on("click", ".showBtn", displayGif);

buttons();