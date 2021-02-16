var menuOpen = false;

document.getElementById("menuBTN").addEventListener("click", function() {
    console.log("menuExpand")
    if (menuOpen) {
        menuOpen = false;
        document.getElementById("rightContainer").style.width = "5vw"
    } else {
        menuOpen = true;
        document.getElementById("rightContainer").style.width = "10vw"
    }
})