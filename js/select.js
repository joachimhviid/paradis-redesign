function Select(button) {
    var checkbox = button.parentNode.querySelector("input");
    if (checkbox.checked === true) {
        checkbox.checked = false;
        button.classList.toggle("active");
        button.innerHTML = "Vælg";
    } else {
        checkbox.checked = true;
        button.classList.toggle("active");
        button.innerHTML = "Valgt";
    }
}