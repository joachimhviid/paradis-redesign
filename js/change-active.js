// Get the menu
var configMenu = document.getElementById("configMenu");

// Get all buttons inside the container
var menuBtns = configMenu.getElementsByClassName("configmenubutton");

// Array of all the section IDs
var configSections = [
    document.getElementById("grundsmage"),
    document.getElementById("ekstraSmage"),
    document.getElementById("striber"),
    document.getElementById("knas"),
    document.getElementById("kurv")
];

var configText = document.getElementById("headConfigText");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < menuBtns.length; i++) {
    menuBtns[i].addEventListener("click", function () {
        let currentMenu = document.getElementsByClassName(" active");
        currentMenu[0].className = currentMenu[0].className.replace(" active", "");
        this.className += " active";
    });
};

ChangeSection = (id) => {
    let current = document.getElementsByClassName(" active-section");
    current[0].className = current[0].className.replace(" active-section", "");
    id.className += " active-section";
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
        if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            currentMenu[0].className = currentMenu[0].className.replace(" active", "");
            i++;
            configSections[i].className += " active-section";
            menuBtns[i].className += " active";
        }
        currentID == configSections[0].id ? configText.innerHTML = "Vælg ekstra smage til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[1].id ? configText.innerHTML = "Vælg striber til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[2].id ? configText.innerHTML = "Vælg knasende stykker til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[3].id ? configText.innerHTML = "Bekræft dine valg og føj Din Paradis til din kurv." : null;
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
        if (currentID == configSections[i].id) {
            configSections[i].className = configSections[i].className.replace(" active-section", "");
            currentMenu[0].className = currentMenu[0].className.replace(" active", "");
            let e = i;
            e--;
            configSections[e].className += " active-section";
            menuBtns[e].className += " active";
        }
        currentID == configSections[1].id ? configText.innerHTML = "Vælg en grundsmag til Din Paradis." : null;
        currentID == configSections[2].id ? configText.innerHTML = "Vælg ekstra smage til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[3].id ? configText.innerHTML = "Vælg striber til Din Paradis. (Valgfrit)" : null;
        currentID == configSections[4].id ? configText.innerHTML = "Vælg knasende stykker til Din Paradis. (Valgfrit)" : null;
    }
}

ToggleMenu = () => {
    for (let i = 0; i < menuBtns.length; i++) {
        if (menuBtns[i].style.display == "none") {
            //console.log(menuBtns[i]);
            menuBtns[i].style.display = "inline-block";
        } else if (menuBtns[i].style.display == "inline-block" && menuBtns[i].className != " active") {
            menuBtns[i].style.display = "none";
        }
    }
}