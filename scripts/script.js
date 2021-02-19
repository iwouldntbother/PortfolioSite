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
            document.querySelector(":root").style.setProperty("--bg", lightCol)
            document.querySelector(":root").style.setProperty("--text", darkCol)
            colourMode = "light"
        } else if (colourMode == "light") {
            document.querySelector(":root").style.setProperty("--bg", darkCol)
            document.querySelector(":root").style.setProperty("--text", lightCol)
            colourMode = "dark"
        }
    } else {
        if (mode == "light") {
            document.querySelector(":root").style.setProperty("--bg", lightCol)
            document.querySelector(":root").style.setProperty("--text", darkCol)
            colourMode = "light"
        } else if (mode == "dark") {
            document.querySelector(":root").style.setProperty("--bg", darkCol)
            document.querySelector(":root").style.setProperty("--text", lightCol)
            colourMode = "dark"
        } else {
            console.log("Error - Colour mode not recognised")
        }
    }
}

lightSwitch("dark")

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
    
    document.getElementById("detailUnit").innerHTML = "CSM"
    document.getElementById("detailModule").innerHTML = "GCD"
    document.getElementById("detailWeek").innerHTML = "Year 1"

    document.getElementById("moduleName").innerHTML = "Will Westwood"
    document.getElementById("moduleDate").innerHTML = "GCD Portfolio"
    document.getElementById("moduleBrief").innerHTML = "I'm Will, a Graphic Design student at Central Saint Martins. I specialise in web design and development, 3D and digital design work.<br><br>This is a collection and timeline of my work at Central Saint Martins on the Graphic Communication Design course."

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
        projectListData += '<div class="listSub text"><h1>' + "Unit " + unit.replace("unit", "") + '</h1></div>'
        for (i=0; i < projectData[unit].length; i++) {
            projectListData += '<div class="listItem text" id="' + unit + "/" + i + '" onmouseover="showCover(this.id)" onmouseout="hideCover()" onclick="loadProject(this.id); hideCover()"><h1 class="listText">' + projectData[unit][i].title + '</h1></div>'
        }
    }

    return projectListData;
}

function loadProject(unitid) {

    var unit = unitid.split("/")[0]
    var projectID = unitid.split("/")[1]

    var detailUnit = document.getElementById("detailUnit");
    var detailModule = document.getElementById("detailModule");
    var detailWeek = document.getElementById("detailWeek");

    var moduleName = document.getElementById("moduleName");
    var moduleDate = document.getElementById("moduleDate");
    var moduleBrief = document.getElementById("moduleBrief");

    var mainContentHolder = document.getElementById("mainContentHolder");

    pageSweep()

    setTimeout(() => {

        detailUnit.innerHTML = "Unit " + unit.replace("unit", "");
        detailModule.innerHTML = projectData[unit][projectID].module;
        detailWeek.innerHTML = projectData[unit][projectID].week;

        moduleName.innerHTML = projectData[unit][projectID].module;
        moduleDate.innerHTML = projectData[unit][projectID].date;
        moduleBrief.innerHTML = projectData[unit][projectID].brief;

        mainContentHolder.innerHTML = projectDetail(unit, projectID);

    }, 500)

}

function projectDetail(unit, projectID) {
    var projectDetailData = projectData[unit][projectID].detail

    var projectDetailReturn = "";

    projectDetailReturn += "<h1 class='projectDetailTitle text'>" + projectData[unit][projectID].title + "</h1>"

    for (i=0; i < projectDetailData.length; i++) {
        if (projectDetailData[i].type == "image") {

            projectDetailReturn += "<img class='projectDetailIMG' src='" + projectDetailData[i].source + "'>"

        } else if (projectDetailData[i].type == "text") {

            projectDetailReturn += "<h2 class='projectDetailSub text'>" + projectDetailData[i].subText + "</h2>"
            projectDetailReturn += "<p class='projectDetailPara text'>" + projectDetailData[i].paraText + "</p>"

        } else if (projectDetailData[i].type == "link") {

            projectDetailReturn += "<a class='projectDetailLink' href='" + projectDetailData[i].link + "' target='" + projectDetailData[i].target + "'>" + projectDetailData[i].text + "</a>"

        } else if (projectDetailData[i].type == "video") {

            projectDetailReturn += "<video class='projectDetailVideo' src='" + projectDetailData[i].source + "'>"

        }
    }

    return projectDetailReturn;

}

// loadProject("unit1", 0);