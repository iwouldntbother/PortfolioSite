// console.log(Object.keys(projectData).length)

var currentUnit = "unit1";
var currentProject = 0;

function loadUnits() {
    document.getElementById("unitListHolder").innerHTML = "";
    for (i = 1; i < Object.keys(projectData).length; i++) {
        if (projectData["unit"+i].length > 0 && i > 1) {
            document.getElementById("unitListHolder").innerHTML += '<h1 id="unit' + i + 'BTN" onclick="switchUnit(\'unit' + i + '\', 0);">Unit ' + i + '</h1>' 
        } else if (projectData["unit"+i].length > 0 && i == 1) {
            document.getElementById("unitListHolder").innerHTML += '<h1 id="unit' + i + 'BTN" class="selected" onclick="switchUnit(\'unit' + i + '\', 0);">Unit ' + i + '</h1>' 
        }
    }

}

function switchUnit(unit) {
    // console.log(unit)
    document.getElementById(currentUnit+"BTN").classList.remove("selected")
    loadProject(unit, 0)
    currentUnit = unit
    currentProject = 0
    document.getElementById(currentUnit+"BTN").classList.add("selected")
    updateArrows()
}

function loadProject(unit, projectID) {
    const title = document.getElementById("workTitle")
    const subTitle = document.getElementById("workSubTitle")
    const currentPreview = document.getElementById("currentProject")
    const nextPreview = document.getElementById("nextProject")
    const pageNo = document.getElementById("pageNo")

    pageNo.innerHTML = ("00" + (projectID + 1)).slice(-2) + " / " + ("00" + projectData[unit].length).slice(-2)

    var titleData = projectData[unit][projectID].title
    var subTitleData = projectData[unit][projectID].subTitle

    title.innerHTML = titleData
    subTitle.innerHTML = subTitleData

    currentPreview.style.backgroundImage = "url('" + projectData[unit][projectID].coverImage + "')"

    if (projectID == projectData[unit].length - 1) {
        console.log("last or only cover")
        nextPreview.style.width = "0vw";
        nextPreview.style.pointerEvents = "none";
    } else {
        nextPreview.style.backgroundImage = "url('" + projectData[unit][projectID+1].coverImage + "')"
        nextPreview.style.width = "10vw"
        nextPreview.style.pointerEvents = "all";
    }

}


function updateArrows() {

    var currentUnitLength = projectData[currentUnit].length - 1

    if (currentProject == 0 && currentProject < currentUnitLength) {
        disableControl("left")
    } else if (currentProject == currentUnitLength && currentProject > 0) {
        disableControl("right")
    } else if (currentProject == currentUnitLength && currentProject == 0) {
        disableControl("both")
    } else {
        console.log("Error: updateArrows() didn't change anything", currentProject, currentUnitLength)
    }

}

function disableControl(arrow) {
    const arrowLeft = document.getElementById("controlLeft");
    const arrowRight = document.getElementById("controlRight");

    arrowLeft.classList.remove("controlDisabled");
    arrowRight.classList.remove("controlDisabled");

    if (arrow == "left") {
        arrowLeft.classList.add("controlDisabled");
    } else if (arrow == "right") {
        arrowRight.classList.add("controlDisabled");
    } else if (arrow == "both") {
        arrowLeft.classList.add("controlDisabled");
        arrowRight.classList.add("controlDisabled");
    }
}

function arrowRight() {
    loadProject(currentUnit, currentProject + 1)
    currentProject = currentProject + 1
    updateArrows()
}

function arrowLeft() {
    loadProject(currentUnit, currentProject - 1)
    currentProject = currentProject - 1
    updateArrows()
}


function init() {
    loadUnits();

    loadProject(currentUnit, currentProject);

    updateArrows()
}

init()


// TODO

// 1. Make arrows work

// 2. Plan for only 1 project (Covers)

// 3. Get Covers loading


window.addEventListener("scroll", function(){
    var remap = (1 - (window.scrollY / window.innerHeight)) * 1.2;
    if (window.scrollY <= window.innerHeight) {
        // console.log((1-(window.scrollY / window.innerHeight))*2)
        if (remap <= 1) {
            document.getElementById("siteContainer").style.opacity = remap;
        }
    }
})