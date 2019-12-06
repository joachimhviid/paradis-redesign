// Get the menu
var configMenu = document.getElementById("configMenu");

// Get all buttons inside the container
var menuBtns = configMenu.getElementsByClassName("configmenubutton");

// Array of all the section IDs
var configSections = [
    document.getElementById("butik"),
    document.getElementById("grundsmage"),
    document.getElementById("ekstraSmage"),
    document.getElementById("striber"),
    document.getElementById("knas"),
    document.getElementById("kurv")
];

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener("click", function() {
        let currentMenu = document.getElementsByClassName(" active");
        currentMenu[0].className = currentMenu[0].className.replace(" active", "");
        this.className += " active";
    });
};

ChangeSection = (id) => {
    let current = document.getElementsByClassName(" active-section");
    let icecreamElement = document.getElementById("icecream");
    let searchElement = document.getElementById("butiksearch");
    current[0].className = current[0].className.replace(" active-section", "");
    id.className += " active-section";
    if (id == butik) {
        icecreamElement.style.display = "none";
        searchElement.style.display = "block";
    } else {
        icecreamElement.style.display = "block";
        searchElement.style.display = "none";
    }
};

NextSection = () => {
    let current = document.getElementsByClassName(" active-section");
    let currentMenu = document.getElementsByClassName(" active");
    var currentID = current[0].id;
    for (var i = 0; i < configSections.length; i++) {
        if (currentID == configSections[configSections.length - 1].id) {
            return;
        }
        else if (condition) {
            
        }
        else if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            currentMenu[0].className = currentMenu[0].className.replace(" active", "");
            i++;
            configSections[i].className += " active-section";
            menuBtns[i].className += " active";
        }
    }
};

PrevSection = () => {
    let current = document.getElementsByClassName(" active-section");
    let currentMenu = document.getElementsByClassName(" active");
    var currentID = current[0].id;
    for (var i = 0; i < configSections.length; i++) {
        if (currentID == configSections[0].id) {
            return;
        }
        else if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            currentMenu[0].className = currentMenu[0].className.replace(" active", "");
            let e = i;
            e--;
            configSections[e].className += " active-section";
            menuBtns[e].className += " active";
        }
    }
}