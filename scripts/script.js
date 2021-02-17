var menuOpen = false;

document.getElementById("menuBTN").addEventListener("click", function() {
    // console.log("menuExpand")
    toggleMenu()
})

function toggleMenu() {

    var menuOptions = document.getElementsByClassName("menuTrans");
    // console.log(menuOptions)

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

function loadingScreen() {
    const finalText = "Will Westwood"
    const alphabet = "abcdefghijklmnopqrstuvwxyz"

    const loadingText = document.getElementById("loadingText")
    const loadingScreen = document.getElementById("loadingScreen")

    var pos = 0;

    var lsInit = setInterval(() => {
        for (i=pos; i < finalText.length; i++) {
            if (i == 4) {
                loadingText.innerHTML = loadingText.innerHTML.replaceAt(i, " ")
            } else {
                loadingText.innerHTML = loadingText.innerHTML.replaceAt(i, alphabet[Math.floor(Math.random() * alphabet.length)])
            }
        }
    }, 50)

    setTimeout(() => {
        var wipe = setInterval(() => {
            if (pos < finalText.length) {
                pos++;
                loadingText.innerHTML = loadingText.innerHTML.replaceAt(pos - 1, finalText[pos - 1]);
            } else {
                clearInterval(lsInit);
                clearInterval(wipe);
            }
        }, 250)
    }, 2000)

    setTimeout(() => {
        loadingScreen.style.opacity = 0;
        loadingScreen.style.pointerEvents = "none"
    }, 7000)
    
}

// loadingScreen()

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}



const img = document.getElementById("mouseIMG")
const onMouseMove = (e) => {
    img.style.left = e.pageX + 'px';
    img.style.top = e.pageY + 'px';
}

function showCover(unitid) {
    // console.log(id)
    var img = document.getElementById("mouseIMG")

    var unit = unitid.split("/")[0]
    var id = unitid.split("/")[1]

    img.setAttribute("src", projectData[unit][id].coverImage)

    document.addEventListener("mousemove", onMouseMove);
}

function hideCover() {
    var img = document.getElementById("mouseIMG")
    img.setAttribute("src", "")
    document.removeEventListener("mousemove", onMouseMove)
}






//
//  Init setup
//

init()

function init() {
    let mainContentHolder = document.getElementById("mainContentHolder")
    // document.getElementById("name").style.opacity = 0;

    mainContentHolder.innerHTML = "";

    mainContentHolder.innerHTML = projectList()

}

function projectList() {
    var projectListData = ""

    for (unit in projectData) {
        if (projectData[unit].length < 1) {
            break
        }
        // console.log(Object.values(projectData))
        projectListData += '<div class="listSub"><h1>' + unit + '</h1></div>'
        for (i=0; i < projectData[unit].length; i++) {
            projectListData += '<div class="listItem" id="' + unit + "/" + i + '" onmouseover="showCover(this.id)" onmouseout="hideCover()"><h1 class="listText">' + projectData[unit][i].title + '</h1></div>'
        }
    }

    return projectListData;
}