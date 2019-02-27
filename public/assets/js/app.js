$(document).ready(function () {


    $(function () {

        // var modal = openingModal();
        // Add a new burger.
        $(".create-form").on("submit", function (event) {
            event.preventDefault();
            var x;
            x = $("#newburger").val()
            if (x === "") {
                alert("Please enter the burger name to be added to the menu");
                return false;
            } else {
                $("#myModal").show();
                var newBurger = {
                    burger_name: $("#newburger").val().trim(),
                    devoured: 0
                }

                // Send the POST request.
                $.ajax("/api/burgers", {
                    type: "POST",
                    data: newBurger
                }).then(function () {
                    // alert("New Burger added to the Menu!") Replaced by modal!

                    console.log("Added new burger");


                    // Reload the page to get the updated burger list.
                    setTimeout(function () { location.reload() }, 3000);
                });
            }
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

});