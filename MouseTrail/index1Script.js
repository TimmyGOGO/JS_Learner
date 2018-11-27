function startToAct(event) {
    if (event.button == 0) { //if mouse left-button down
        window.addEventListener("mousemove", leaveTrail);
        event.preventDefault(); // Prevent selection
    }
}

function leaveTrail(event) {
    let trail = document.createElement("div");
    trail.className = "trail";
    trail.style.left = (event.pageX - 4) + "px";
    trail.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(trail);
}

function finishToAct(event) {
    if (event.button == 0) { //if mouse left-button up
        window.removeEventListener("mousemove", leaveTrail);
    }
}

window.addEventListener("mousedown", startToAct);
window.addEventListener("mouseup", finishToAct)
    /*
    if (event == "mousemove"){
        setTimeout(() => {
            document.body.textContent = `Mouse was here (${event.clientX}, ${event.clientY})`;
        }, 200);
        
    }
    */
    //timeout = setTimeout(() => console.log("Typed!"), 500);

