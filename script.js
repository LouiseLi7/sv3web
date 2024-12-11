function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    // Simulate a click on the first tab link
    document.querySelector(".tablinks").click();
});

document.addEventListener("DOMContentLoaded", function() {
    const spans = document.querySelectorAll('.title span');
    spans.forEach((span, idx) => {
        // Set a staggered delay for each letter, starting with the first
        span.style.animationDelay = `${idx * 0.1}s`;  // Adjust timing to control speed
    });
    const subSpans = document.querySelectorAll('.subtitle span');
    subSpans.forEach((span, idx) => {
        // Set a staggered delay for each letter, starting with the first
        span.style.animationDelay = `${idx * 0.08}s`;  // Adjust timing to control speed
    });
});
