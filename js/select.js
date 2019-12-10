SelectOne = (button) => {
    var section = button.closest("section");
    var cards = section.getElementsByClassName("main-button");
    var checkbox = button.parentNode.querySelector("input");
    if (checkbox.checked === true) {
        checkbox.checked = false;
        button.classList.remove("active");
        button.innerHTML = "Vælg";
    } else {
        checkbox.checked = true;
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove("active");
            cards[i].innerHTML = "Vælg";
        }
        button.classList.add("active");
        button.innerHTML = "Valgt";
    }
}

Select = (button) => {
    var checkbox = button.parentNode.querySelector("input");
    if (checkbox.checked === true) {
        checkbox.checked = false;
        button.classList.remove("active");
        button.innerHTML = "Vælg";
    } else {
        checkbox.checked = true;
        button.classList.add("active");
        button.innerHTML = "Tilføjet";
    }
}