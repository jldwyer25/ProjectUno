// $(".dropdown-menu option:selected").text();
console.log("Hello");
// $(".dropdown-menu").text("HELLO");

var latest_value= "";

$("#dogdropdown").on('change', function() {
    console.log($("#dogdropdown option:selected").text().val());
    latest_value = $("#dogdropdown option:selected").val();
});

$("#catdropdown").on('change', function() {
    console.log($("#catdropdown option:selected").val());
    latest_value = $("#catdropdown option:selected").val();
});

$("#searchbutton").click(function(){
    console.log("Ya clicked")
    event.preventDefault();
    var zip = $("#zip-input").val().trim();
    console.log(zip);
    console.log("The last value picked was " + latest_value + " and the zipcode is " + zip);
    sessionStorage.setItem("breed", latest_value);
    sessionStorage.setItem("zip", zip);
    sessionStorage.getItem(latest_value);
    sessionStorage.getItem(zip);
    //^^ IS THIS NECESSARY?
    console.log("Your latest Value is" + latest_value + "and your zip is"+zip);
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    //     type + "&api_key=dc6zaTOxFJmzC&limit=10"; THIS WILL BE PETFINDER
    $.ajax({
        url: queryURL,
        method: "GET"})
        .then(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                var petDiv = $("<div class='gif-item'>");
                var name = response.data[i].name;
                var p = $("<p>").text(rating);
                var still = response.data[i].images.fixed_height_still.url;
                var image = $("<img>");
                image.attr("src", still);
                // image.attr("data-state", "still");
                image.addClass("searchImage");
                gifDiv.append(p);
                gifDiv.append(image);
                $("#gifDump").prepend(gifDiv);
            }
        })
    $(".searchImage").click(function(){
        
    })
});






// function myFunction($elem) {
//    var lastID;
//    lastID = $elem.attr('id');
//    $.data('lastID', lastID);



// $(".dropdown-item").on("click", function (event) {
//     event.preventDefault();
//     var pet = $(this).text();
//     console.log(pet);
//     $(".dropdown-menu").text(pet);
// })
