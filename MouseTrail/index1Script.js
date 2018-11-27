function update(event) {
    let dot = document.createElement("div");
    dot.className = "trail";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
}
    /*
    if (event == "mousemove"){
        setTimeout(() => {
            document.body.textContent = `Mouse was here (${event.clientX}, ${event.clientY})`;
        }, 200);
        
    }
    */
    //timeout = setTimeout(() => console.log("Typed!"), 500);
    /*
    for (let dot; dot = document.querySelector("trail");) {
      dot.remove();
    }
    for (let i = 0; i < event.touches.length; i++) {
      let {pageX, pageY} = event.touches[i];
      let dot = document.createElement("dot");
      dot.style.left = (pageX - 50) + "px";
      dot.style.top = (pageY - 50) + "px";
      document.body.appendChild(dot);
    }
    */
window.addEventListener("mousemove", update);