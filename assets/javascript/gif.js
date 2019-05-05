$( document ).ready(function() {
var cartoons = ['Spongebob', 'Futurama', 'South Park'];
var isGifClicked = "still";

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
            gifDiv.addClass("gif")
            var rating = $("<p>").text("Rating: " + results[i].rating); 
            
            var showGif = $("<img>");

            showGif.attr("src", results[i].images.fixed_height_still.url);
            showGif.attr("data-still", results[i].images.fixed_height_still.url);
            showGif.attr("data-motion", results[i].images.fixed_height.url);
            showGif.attr("data-state", "still");
            showGif.addClass("gifImg");
            
            showGif.attr("alt", "Gif Image of a cartoon");
            
            gifDiv.prepend(rating);
            gifDiv.prepend(showGif);
            
            
            $("#gifTarget").prepend(gifDiv);
        }
        
    });
    
}

function changeSrc(){
    isGifClicked = true;
    console.log('clicked');
    console.log(isGifClicked);
    stillGif.attr("src", results[i].images.fixed_height.url);
}

function buttons(){
    
    $("#btnTarget").empty();

    for (var i = 0; i < cartoons.length; i++) {

        var btnDiv = $("<button>");
        btnDiv.addClass("labelBtn");
        btnDiv.attr("data-name", cartoons[i]);
        btnDiv.text(cartoons[i]);
        $("#btnTarget").append(btnDiv);
    }
    
}
$(document).on("click",".gifImg", function(){
    // alert("clicked")
    // debugger;
    var state = $(this).attr("data-state");
    console.log($(this).attr("data-state"));
    // if(!state){
    //     return;
    // }
    if (state === "still"){
        $(this).attr("src", $(this).attr("data-motion"));
        $(this).attr("data-state", "motion");
    }else{
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", isGifClicked);
    }
});

$("#clear").on('click', function(){
    $("#gifTarget").empty();
})

$("#toonBtn").on("click", function(event) {
    event.preventDefault();
    var show = $("#toonInput").val().trim();
    cartoons.push(show);
    buttons();
  });


$(document).on("click", ".labelBtn", displayGif);

buttons();
})