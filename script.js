window.onload = function() {
    var dropdownButton = document.querySelector(".dropdown-button");
    var menu = document.querySelector(".menu");

    dropdownButton.addEventListener("click", function() {
        var display = menu.style.display;
        
        if(display == "none" || display == "") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
};
