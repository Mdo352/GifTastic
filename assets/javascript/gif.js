var cartoons = ['Spongebob', 'Futurama', 'South Park'];

function displayGif() {

    // var show = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=2cbOR934j9f4PwJLNJwwHhYIE2XIDONd&tag=simpsons";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

    console.log(response);

    //interrogate response object to get image url
    var imageUrl = response.data.image_original_url;
    var showImage = $("<img>");
    showImage.attr("src", imageUrl);
    showImage.attr("alt", "Simpsons Image");
    $("#gifTarget").prepend(showImage);

    });

}

function buttons(){

    for (var i = 0; i < cartoons.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var btnDiv = $("<button>");
        // Adding a class of movie-btn to our button
        btnDiv.addClass("movie-btn");
        // Adding a data-attribute
        btnDiv.attr("data-name", cartoons[i]);
        // Providing the initial button text
        btnDiv.text(cartoons[i]);
        // Adding the button to the buttons-view div
        $("#btnTarget").append(btnDiv);
    }

}

// cartoonGif();
buttons();