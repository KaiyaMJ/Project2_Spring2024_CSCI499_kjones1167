// Function to call the search API
function apiSearch() {
    $.ajax({
        type: 'GET',
        dataType: "jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyCVBq_bOCpgFySNExPTM3wrsJOTao_50sI&cx=82231fa99960d4db4&q=" + $("#query").val(),
        success: function(result) {
            console.log('data: ', result);
            var searchOutput = '';
            var len = result.items.length;
            for (i = 0; i < len; i++) {
                searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
            }

            $("#searchResults").html(searchOutput); // Changed from "#output" to "#searchResults"

        }
    });
}

// Function to handle search button click
function handleSearch() {
    document.getElementById("searchBtn").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent form submission
        apiSearch(); // Call API search function
        document.getElementById("searchResults").style.display = "block"; // Show search results
    });
}

// Function to change background color
function changeBackgroundColor() {
    document.getElementById("changeColorBtn").addEventListener("click", function() {
        document.body.style.backgroundColor = getRandomColor();
    });
}

// Function to generate random color
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to toggle fade for header, text box, and search button
function toggleFade() {
    // Toggle fade for header
    document.querySelector("header").classList.toggle("hide");

    // Toggle fade for text box
    document.getElementById("query").classList.toggle("hide");

    // Toggle fade for search button
    document.getElementById("searchBtn").classList.toggle("hide");
}

// Call toggleFade() function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    var elementsToFade = document.querySelectorAll(".fade");
    elementsToFade.forEach(function(element) {
        element.classList.add("hide"); // Hide elements initially
    });

    var toggleFadeBtn = document.getElementById("toggleFadeBtn");
    toggleFadeBtn.addEventListener("click", toggleFade);
});



// Function to call the search API and retrieve only the first result
function apiSearchLucky() {
    $.ajax({
        type: 'GET',
        dataType: "jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyCVBq_bOCpgFySNExPTM3wrsJOTao_50sI&cx=82231fa99960d4db4&q=" + $("#query").val(),
        success: function(result) {
            console.log('data: ', result);
            var firstResult = result.items[0]; // Get the first result
            var luckyOutput = `<p><a href="${firstResult.link}">${firstResult.title}</a>: ${firstResult.snippet}</p>`;
            $("#searchResults").html(luckyOutput); // Display the first result
        }
    });
}

// Function to handle "I'm Feeling Lucky" button click
function handleLuckyButton() {
    document.getElementById("luckyBtn").addEventListener("click", function() {
        apiSearchLucky(); // Call API search function to retrieve only the first result
        document.getElementById("searchResults").style.display = "block"; // Show search results
    });
}
// Call functions when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    handleSearch();
    changeBackgroundColor();
    toggleFade();
    handleLuckyButton();
});