// console.log(Object.keys(projectData).length)

var currentUnit = "unit1"

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
    document.getElementById(currentUnit+"BTN").classList.add("selected")
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

}

function init() {
    loadUnits();

    loadProject(currentUnit, 0);
}

init()

// TODO

// 1. Make arrows work

// 2. Plan for only 1 project (Covers)

// 3. Get Covers loading