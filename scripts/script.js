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

    // title.innerHTML = titleData
    // subTitle.innerHTML = subTitleData

    textAnim(titleData, subTitleData);

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

    loadProjectDetail(unit, projectID)

}

function loadProjectDetail(unit, projectID) {
    var detailHolder = document.getElementById("projectDetailHolder")
    var detail = projectData[unit][projectID].detail

    detailHolder.innerHTML = "";
    for (i=0; i<detail.length; i++) {
        detailHolder.innerHTML += "<div id=\"image"+i+"\" class=\"detailImageHolder\"><img src='"+detail[i].image+"'></div>"
    }

    document.getElementById("scrollContainer").style.height = 100*detail.length + "vh"

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

function textAnim(newTtitle, newSub) {
    var title = document.getElementById("workTitle");
    var sub = document.getElementById("workSubTitle");
    title.style.marginTop = "15vw";
    setTimeout(function(){
        title.innerHTML = newTtitle;
        sub.innerHTML = newSub;
        title.style.marginTop = "0vw";
    }, 250)
}

function detailTextChanger(newSub, newPara) {
    console.log("Chnageing text")
    var sub = document.getElementById("projectDetailSub").firstChild
    var para = document.getElementById("projectDetailPara").firstChild

    sub.style.marginTop = "5%"
    sub.style.marginBottom = "-5%"
    para.style.marginTop = "15%"
    para.style.marginBottom = "-15%"
    
    setTimeout(function(){
        sub.innerHTML = newSub;
        para.innerHTML = newPara;
        sub.style.marginTop = "0%"
        sub.style.marginBottom = "0%"
        para.style.marginTop = "0%"
        para.style.marginBottom = "0%"
    }, 250)
}

// TODO

// 1. 

// 2. 

// 3. 

var currentImageID;

// document.getElementById("projectDetailContainer").addEventListener("scroll", function(){
    window.addEventListener("scroll", function(){
//     var remap = (1 - (window.scrollY / window.innerHeight)) * 1.2;
//     if (window.scrollY <= window.innerHeight) {
//         // console.log((1-(window.scrollY / window.innerHeight))*2)
//         if (remap <= 1) {
//             document.getElementById("siteContainer").style.opacity = remap;
//         }
//     }

    
    
    var images = document.getElementsByClassName("detailImageHolder")
    // console.log(images.length)
    for (i=0; i<images.length; i++) {
        var disToTop = images[i].getBoundingClientRect().top
        console.log(disToTop)

        if (disToTop <= window.innerHeight / 2 && currentImageID != i) {
            currentImageID = i
            // console.log(projectData[currentUnit][currentProject].detail[i].subText)
            detailTextChanger(projectData[currentUnit][currentProject].detail[i].subText, projectData[currentUnit][currentProject].detail[i].paraText)
        } else if (disToTop > window.innerHeight / 2 && currentImageID == i) {
            detailTextChanger("", "")
            currentImageID = null;
        }

    }

})


function scroller(event){
    scrollable=document.getElementById("projectDetailContainer");
    switch(event.deltaMode){
      case 0: 		//DOM_DELTA_PIXEL		Chrome
        scrollable.scrollTop+=event.deltaY
        scrollable.scrollLeft+=event.deltaX
        break;
      case 1: 		//DOM_DELTA_LINE		Firefox
        scrollable.scrollTop+=15*event.deltaY
        scrollable.scrollLeft+=15*event.deltaX
        break;
      case 2: 		//DOM_DELTA_PAGE
        scrollable.scrollTop+=0.03*event.deltaY
        scrollable.scrollLeft+=0.03*event.deltaX
        break;
    }
    event.stopPropagation();
    // event.preventDefault()
  }
  
//   document.onwheel = scroller;