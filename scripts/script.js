var menuOpen = false;

document.getElementById("menuBTN").addEventListener("click", function() {
    // console.log("menuExpand")
    toggleMenu()
})

function toggleMenu() {

    var menuOptions = document.getElementsByClassName("menuTrans");
    console.log(menuOptions)

    if (menuOpen) {
        menuOpen = false;
        document.getElementById("rightContainer").style.width = "5vw";

        for (let option of menuOptions) {
            option.style.paddingLeft = "10vw";
        }

    } else {
        menuOpen = true;
        document.getElementById("rightContainer").style.width = "10vw";
        
        for (let option of menuOptions) {
            option.style.paddingLeft = "0vw";
        }

    }
}