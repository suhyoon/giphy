// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
     $(".gallery").empty(); 
    let input = $("#search-term").val();
    let imgUrl = "https://api.giphy.com/v1/gifs/search?q="+input+"&rating=pg&api_key=rQrXp8Skecms5IYqoh0BS4HeQW9L35LY";
//https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=dc6zaTOxFJmzC 
    fetch(imgUrl)
    .then(function(response) {
       return response.json();
    })
    .then(function(data) {
       
       $(".gallery").append("<img src=' + data[2].imgUrl + '/>");
       

    });
});