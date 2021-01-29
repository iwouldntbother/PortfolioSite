function loadImage(unit, projectID) {
    const currentPreview = document.getElementById("currentProject")
    const nextPreview = document.getElementById("nextProject")

    currentPreview.style.backgroundImage = "url('"+projectData[unit][projectID].coverImage+"')";

    // Todo
    // if projectid == projectData[unit].length - 1 set nextPreview width to 0

}