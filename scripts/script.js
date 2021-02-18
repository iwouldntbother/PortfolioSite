document.getElementById("menuBTN").addEventListener("click", function() {
    lightSwitch()
})

var colourMode = "dark"
var lightCol = "#D9D9D9"
var darkCol = "#262626"

function lightSwitch(mode) {

    var bgs = document.querySelectorAll(".bg");
    var texts = document.querySelectorAll(".text");

    if (!mode) {
        if (colourMode == "dark") {
            bgs.forEach(bg => {
                bg.style.backgroundColor = lightCol;
            })

            texts.forEach(text => {
                text.style.color = darkCol;
            })
            colourMode = "light"
        } else if (colourMode == "light") {
            bgs.forEach(bg => {
                bg.style.backgroundColor = darkCol;
            })

            texts.forEach(text => {
                text.style.color = lightCol;
            })
            colourMode = "dark"
        }
    } else {
        if (mode == "light") {
            bgs.forEach(bg => {
                bg.style.backgroundColor = lightCol;
            })

            texts.forEach(text => {
                text.style.color = darkCol;
            })
            colourMode = "light"
        } else if (mode == "dark") {
            bgs.forEach(bg => {
                bg.style.backgroundColor = darkCol;
            })

            texts.forEach(text => {
                text.style.color = lightCol;
            })
            colourMode = "dark"
        } else {
            console.log("Error - Colour mode not recognised")
        }
    }
}

function pageSweep() {
    let rightContainer = document.getElementById("rightContainer")

    rightContainer.style.width = "100vw"
    setTimeout(() => {
        rightContainer.style.width = "5vw"
    }, 500)
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