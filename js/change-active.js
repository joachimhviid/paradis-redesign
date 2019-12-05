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
    current[0].className = current[0].className.replace(" active-section", "");
    id.className += " active-section";
};

NextSection = () => {
    let current = document.getElementsByClassName(" active-section");
    let currentMenu = document.getElementsByClassName(" active");
    //console.log(current);
    var currentID = current[0].id;
    //console.log(currentID);
    for (var i = 0; i < configSections.length; i++) {
        if (currentID == configSections[configSections.length - 1].id) {
            //console.log('final');
            return;
        }
        else if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            currentMenu[0].className = currentMenu[0].className.replace(" active", "");
            i++;
            //console.log(configSections[i].id);
            configSections[i].className += " active-section";
            menuBtns[i].className += " active";
        }
    }
};

PrevSection = () => {
    let current = document.getElementsByClassName(" active-section");
    let currentMenu = document.getElementsByClassName(" active");
    //console.log(current);
    var currentID = current[0].id;
    //console.log(currentID);
    for (var i = 0; i < configSections.length; i++) {
        if (currentID == configSections[0].id) {
            //console.log('first');
            return;
        }
        else if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            currentMenu[0].className = currentMenu[0].className.replace(" active", "");
            let e = i;
            e--;
            //console.log(configSections[e].id);
            configSections[e].className += " active-section";
            menuBtns[e].className += " active";
        }
    }
}