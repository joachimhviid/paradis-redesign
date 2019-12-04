// Get the menu
var configMenu = document.getElementById("configMenu");

// Get all buttons inside the container
var menuBtns = configMenu.getElementsByClassName("configmenubutton");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName(" active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

ChangeSection = (id) => {
    //console.log(id);
    var current = document.getElementsByClassName(" active-section");
    current[0].className = current[0].className.replace(" active-section", "");
    id.className += " active-section";
};