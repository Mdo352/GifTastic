var cartoons = ['Spongebob', 'Futurama', 'South Park'];

function displayGif() {

    var show = $(this).attr("data-name");
    console.log(show);
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=2cbOR934j9f4PwJLNJwwHhYIE2XIDONd&tag="+show;

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        var imageUrl = response.data.image_original_url;
        var showImage = $("<img>");
        showImage.attr("src", imageUrl);
        showImage.attr("alt", "Simpsons Image");
        $("#gifTarget").prepend(showImage);

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