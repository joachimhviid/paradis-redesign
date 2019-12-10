function Select(button) {
    var checkbox = button.parentNode.querySelector("input");
    console.log(checkbox.checked);
    if(checkbox.checked = true) {
        checkbox.checked = false;
        //this.style.background = "salmon";
    } else if(checkbox.checked = false) {
        checkbox.checked = true;
        //this.style.background = "#62B9E9";
    }
}