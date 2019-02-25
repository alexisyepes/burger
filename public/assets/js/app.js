$(document).ready(function () {
  

$(function () {
    
    // Add a new burger.
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        };
        
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            // alert("New Burger added to the Menu!")          
            console.log("Added new burger");

            // Reload the page to get the updated burger list.
            setTimeout(function(){location.reload()}, 4000);
          

        });
    });

    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})



// Get the modal
var modal = $("#myModal")[0];

// Get the button that opens the modal
var btn = $("#addburger")[0];

// Get the <span> element that closes the modal
var span = $(".close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

$('#mymodal').on('hidden.bs.modal', function() {
    this.modal('show');
  });
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

});