// Initialize Firebase
var config = {
    apiKey: "AIzaSyDTmnKgRZEO_BjzJY4bGsqbwi-zLoiooi0",
    authDomain: "fetchbook-50762.firebaseapp.com",
    databaseURL: "https://fetchbook-50762.firebaseio.com",
    projectId: "fetchbook-50762",
    storageBucket: "fetchbook-50762.appspot.com",
    messagingSenderId: "860585274461"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
    var clickCounterDog = 0;
    var clickCounterCat =0;
    $("#dogdropdown").on("click", function() {
      clickCounterDog++;
      database.ref().set({
        clickCountDog: clickCounterDog,
        clickCountCat: clickCounterCat
      });
    })
    
    $("#catdropdown").on("click", function() {
        clickCounterCat++;
        database.ref().set({
          clickCountCat: clickCounterCat,
          clickCountDog: clickCounterDog
        });
      })
// $(".dropdown-menu option:selected").text();
console.log("Hello");
// $(".dropdown-menu").text("HELLO");
var latest_value= "";
var animal="";
$("#dogdropdown").on('click', function() {
    console.log($("#dogdropdown option:selected").val());
    latest_value = $("#dogdropdown option:selected").val();
    animal=$(this).attr("data-breed");
});
$("#catdropdown").on('click', function() {
    console.log($("#catdropdown option:selected").val());
    latest_value = $("#catdropdown option:selected").val();
    animal=$(this).attr("data-breed");
});
// //$("#searchbutton").click(function(){
//     console.log("Ya clicked")
//     event.preventDefault();
//     var zip = $("#zip-input").val().trim();
//     console.log(zip);
//     console.log("The last value picked was " + latest_value + " and the zipcode is " + zip);
//     sessionStorage.setItem("breed", latest_value);
//     sessionStorage.setItem("zip", zip);
//     sessionStorage.getItem(latest_value);
//     sessionStorage.getItem(zip);
//     //^^ IS THIS NECESSARY?
//     console.log("Your latest Value is" + latest_value + "and your zip is"+zip);
    
    // Petfinder API
    
var apiKey = '8847ddf9fde13f7ae175641929be9da9'; // assign our key to a variable, easier to read
// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);
function bindButtons() {
    document.getElementById('searchbutton').addEventListener('click', function (event) {
        event.preventDefault();
        
    
        var zip = document.getElementById('zip-input').value; // this line gets the zip code from the form entry
        var url = 'https://api.petfinder.com/pet.find';
        console.log("hi");
      
        
      //  alert(animal);
       
        console.log(animal);
        // Within $.ajax{...} is where we fill out our query 
        $.ajax({
            url: url,
            type: "GET",
            json: "callback",
            dataType: "jsonp",
            animal: animal,
            //breed: latest_value,
            contact:{
                zip:zip
            },
            data: {
                key: apiKey,
                animal: animal,
                //breed: latest_value,
                location: zip ,
                output: 'basic',
                format: 'json'
            },
            // Here is where we handle the response we got back from Petfinder
            success: function (response) {
                console.log(response.petfinder);
                
            for(var i=0;i<response.petfinder.pets.pet.length-17;i++){
                 console.log(response.petfinder.pets.pet[i].breeds.breed);
                 console.log(response.petfinder.pets.pet[i].contact.zip);
                 //$("#pet-view").text("pet 1: " + response.petfinder.pets.pet[0].breeds.breed.$t);
                 //$("#pet-view2").text(response.petfinder.pets.pet[0].name.$t);
                 //$("#pet-view3").html(response.petfinder.pets.pet[0].media.photos.photo[0].$t);
                
                
                // debugging
                var catName = response.petfinder.pets.pet[0].name.$t;
                var img = response.petfinder.pets.pet[0].media.photos.photo[0].$t;
                var id = response.petfinder.pets.pet[0].id.$t;
                var newName = document.createElement('a');
                //var newDiv = document.createElement('div');
                newName.textContent = catName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;
                var newImg = document.createElement('img');
                newImg.src = img;
                //var list = document.createElement("div");
                //list.setAttribute("id", "List");
                //document.body.appendChild(list);
                //newDiv.appendChild(newName);
                //list.appendChild(newDiv);
                //list.appendChild(newImg);
                
                $("#petsView1").html(newName);
                newName.append(newImg);
                //$("#petsview").html(newImg);
                
                //index 1
                var catName = response.petfinder.pets.pet[1].name.$t;
                var img = response.petfinder.pets.pet[1].media.photos.photo[1].$t;
                var id = response.petfinder.pets.pet[1].id.$t;
                var newName = document.createElement('a');
                newName.textContent = catName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;
                var newImg = document.createElement('img');
                newImg.src = img;
               
                $("#petsView1").append(newName);
                newName.append(newImg);
                //index 2
                var catName = response.petfinder.pets.pet[2].name.$t;
                var img = response.petfinder.pets.pet[2].media.photos.photo[2].$t;
                var id = response.petfinder.pets.pet[2].id.$t;
                var newName = document.createElement('a');
                newName.textContent = catName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;
                var newImg = document.createElement('img');
                newImg.src = img;
               
                $("#petsView1").append(newName);
                newName.append(newImg);
                //index 3
                var catName = response.petfinder.pets.pet[3].name.$t;
                var img = response.petfinder.pets.pet[3].media.photos.photo[3].$t;
                var id = response.petfinder.pets.pet[3].id.$t;
                var newName = document.createElement('a');
                newName.textContent = catName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;
                var newImg = document.createElement('img');
                newImg.src = img;
               
                $("#petsView1").append(newName);
                newName.append(newImg);
                //index 4
                var catName = response.petfinder.pets.pet[4].name.$t;
                var img = response.petfinder.pets.pet[4].media.photos.photo[4].$t;
                var id = response.petfinder.pets.pet[4].id.$t;
                var newName = document.createElement('a');
                newName.textContent = catName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;
                var newImg = document.createElement('img');
                newImg.src = img;
               
                $("#petsView1").append(newName);
                newName.append(newImg);
                //index 5
                var catName = response.petfinder.pets.pet[5].name.$t;
                var img = response.petfinder.pets.pet[5].media.photos.photo[5].$t;
                var id = response.petfinder.pets.pet[5].id.$t;
                var newName = document.createElement('a');
                newName.textContent = catName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;
                var newImg = document.createElement('img');
                newImg.src = img;
               
                $("#petsView1").append(newName);
                newName.append(newImg);
                //index 6
                var catName = response.petfinder.pets.pet[6].name.$t;
                var img = response.petfinder.pets.pet[6].media.photos.photo[6].$t;
                var id = response.petfinder.pets.pet[6].id.$t;
                var newName = document.createElement('a');
                newName.textContent = catName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;
                var newImg = document.createElement('img');
                newImg.src = img;
               
                $("#petsView1").append(newName);
                newName.append(newImg);
                //index 7
                var catName = response.petfinder.pets.pet[7].name.$t;
                var img = response.petfinder.pets.pet[7].media.photos.photo[7].$t;
                var id = response.petfinder.pets.pet[7].id.$t;
                var newName = document.createElement('a');
                newName.textContent = catName;
                newName.href = 'https://www.petfinder.com/petdetail/' + id;
                var newImg = document.createElement('img');
                newImg.src = img;
               
                $("#petsView1").append(newName);
                newName.append(newImg);
            }
            }
        });
    })
}

