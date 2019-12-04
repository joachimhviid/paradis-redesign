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
        let current = document.getElementsByClassName(" active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};

ChangeSection = (id) => {
    let current = document.getElementsByClassName(" active-section");
    current[0].className = current[0].className.replace(" active-section", "");
    id.className += " active-section";
};

NextSection = () => {
    let current = document.getElementsByClassName(" active-section");
    console.log(current);
    var currentID = current[0].id;
    console.log(currentID);
    for (var i = 0; i < configSections.length; i++) {
        if (currentID == configSections[configSections.length - 1].id) {
            console.log('final');
        }
        else if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            i++;
            console.log(configSections[i].id);
            configSections[i].className += " active-section";
        }
    }
};

PrevSection = () => {
    let current = document.getElementsByClassName(" active-section");
    console.log(current);
    var currentID = current[0].id;
    console.log(currentID);
    for (var i = 0; i < configSections.length; i++) {
        if (currentID == configSections[0].id) {
            console.log('first');
        }
        else if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            i--;
            console.log(configSections[i].id);
            configSections[i].className += " active-section";
        }
    }
}