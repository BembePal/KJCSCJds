$(document).ready(function () {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Prompt user for their name
    var userName = prompt("Please enter your name:");

    // Update the letter based on user input
    if (userName) {
        // Check if the name is "Jasmine" or "jasmine"
        if (userName.toLowerCase() === "jasmine") {
            $("#recipient-name").text("Jasmine");
            $("#recipient-name-2").text("Jasmine");
            alert("Welcome, Jasmine! You are special!");
        } else {
            $("#recipient-name").text(userName);
            $("#recipient-name-2").text(userName);
            // Change the message to motivational phrases
            $(".line2").text("Dear " + userName + ", believe in yourself!");
            $(".line3").text("You are capable of amazing things.");
            $(".line4").text("Keep pushing forward!");
        }
    }

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
    });
    btn_reset.click(function () {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }
    function close() {
        envelope.addClass("close").removeClass("open");
    }
});