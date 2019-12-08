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

var configText = document.getElementById("headConfigText");
var icecreamElement = document.getElementById("icecream");
var searchElement = document.getElementById("butiksearch");

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
    if (id == butik) {
        icecreamElement.style.display = "none";
        searchElement.style.display = "block";
        configText.innerHTML = "Vælg den butik du vil hente Din Paradis hos.";
    } else {
        icecreamElement.style.display = "block";
        searchElement.style.display = "none";
    }
    id == grundsmage ? configText.innerHTML = "Vælg en grundsmag til Din Paradis." : null;
    id == ekstraSmage ? configText.innerHTML = "Vælg ekstra smage til Din Paradis. (Valgfrit)" : null;
    id == striber ? configText.innerHTML = "Vælg striber til Din Paradis. (Valgfrit)" : null;
    id == knas ? configText.innerHTML = "Vælg knasende stykker til Din Paradis. (Valgfrit)" : null;
    id == kurv ? configText.innerHTML = "Bekræft dine valg og føj Din Paradis til din kurv." : null;
};

NextSection = () => {
    let current = document.getElementsByClassName(" active-section");
    let currentMenu = document.getElementsByClassName(" active");
    var currentID = current[0].id;
    for (var i = 0; i < configSections.length; i++) {
        // Checks if current section is the last section and prevents the user from going further forwards
        if (currentID == configSections[configSections.length - 1].id) {
            return;
        }
        // Checks if the current active section is the first and shows relevant top element accordingly for next section
        if (currentID == configSections[0].id) {
            icecreamElement.style.display = "block";
            searchElement.style.display = "none";
            configText.innerHTML = "Vælg en grundsmag til Din Paradis.";
        }
        if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            currentMenu[0].className = currentMenu[0].className.replace(" active", "");
            i++;
            configSections[i].className += " active-section";
            menuBtns[i].className += " active";
        }
        currentID == configSections[1].id ? configText.innerHTML = "Vælg ekstra smage til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[2].id ? configText.innerHTML = "Vælg striber til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[3].id ? configText.innerHTML = "Vælg knasende stykker til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[4].id ? configText.innerHTML = "Bekræft dine valg og føj Din Paradis til din kurv." : null;
    }
};

PrevSection = () => {
    let current = document.getElementsByClassName(" active-section");
    let currentMenu = document.getElementsByClassName(" active");
    var currentID = current[0].id;
    for (var i = 0; i < configSections.length; i++) {
        // Checks if current section is the first section and prevents the user from going further back
        if (currentID == configSections[0].id) {
            return;
        }
        // Checks if the current active section is going to be the first and shows relevant top element accordingly
        if (currentID == configSections[1].id) {
            icecreamElement.style.display = "none";
            searchElement.style.display = "block";
            configText.innerHTML = "Vælg den butik du vil hente Din Paradis hos.";
        }
        if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            currentMenu[0].className = currentMenu[0].className.replace(" active", "");
            let e = i;
            e--;
            configSections[e].className += " active-section";
            menuBtns[e].className += " active";
        }
        currentID == configSections[2].id ? configText.innerHTML = "Vælg en grundsmag til Din Paradis." : null;
        currentID == configSections[3].id ? configText.innerHTML = "Vælg ekstra smage til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[4].id ? configText.innerHTML = "Vælg striber til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[5].id ? configText.innerHTML = "Vælg knasende stykker til Din Paradis. (Valgfrit)" : null;
    }
}