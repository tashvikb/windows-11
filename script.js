let startIcon = document.getElementsByClassName("start-icon")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let fileManagerIcon = document.getElementsByClassName("fm-icon")[0]
let fileManager = document.getElementsByClassName("file-manager")[0]
let body = document.getElementsByClassName("wrapper")[0]

startIcon.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

fileManagerIcon.addEventListener("click", () => {
    if(fileManager.style.opacity == "0"){
        fileManager.style.opacity = "1";
    }
    else{
        fileManager.style.opacity = "0";
    }
})

// Live Date and Time
var d = new Date()
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
document.getElementsByClassName('dt-time')[0].innerHTML = d.getHours() + ":" + d.getMinutes();
document.getElementsByClassName('dt-day')[0].innerHTML = day[d.getDay()];
document.getElementsByClassName('dt-date')[0].innerHTML = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();

// dtTime = "d.getTime()"