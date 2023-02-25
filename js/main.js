// Set the start date
var startDate = new Date("August 1, 2021 00:00:00").getTime();

// Update the timer every second
var timer = setInterval(function() {
    // Get the current date and time
    var now = new Date().getTime();

    // Calculate the time difference
    var timeDiff = now - startDate;

    // Convert time difference to years, days, hours, minutes, and seconds
    var years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the timer in the HTML page
    document.getElementById("timer").innerHTML = years + " years - " + days + " days - " + hours + " hours - " + minutes + " minutes - " + seconds + " seconds";
}, 1000); // Update every second (1000 milliseconds)