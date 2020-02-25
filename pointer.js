const pointer = document.createElement("div")
pointer.id = "pointer-dot"
const ring = document.createElement("div")
ring.id = "pointer-ring"
document.body.insertBefore(pointer, document.body.children[0])
document.body.insertBefore(ring, document.body.children[0])

let mouseX = 100
let mouseY = 100
let ringX = 100
let ringY = 100
let isHover = false
let mouseDown = false
const init_pointer = (options) => {

  window.onmousemove = (mouse) => {
    mouseX = mouse.clientX
    mouseY = mouse.clientY
  }

  window.onmousedown = (mouse) => {
    mouseDown = true
  }

  window.onmouseup = (mouse) => {
    mouseDown = false
  }

  const trace = (a, b, n) => {
    return (1 - n) * a + n * b;
  }
  window["trace"] = trace

  const getOption = (option) => {
    let defaultObj = {
      pointerColor: "#1717AF",
      ringSize: 10,
      ringClickSize: (options["ringSize"] || 15) - 10,
    }
    if (options[option] == undefined) {
      return defaultObj[option]
    } else {
      return options[option]
    }
  }

  const render = () => {
    ringX = trace(ringX, mouseX, 0.26)
    ringY = trace(ringY, mouseY, 0.26)

    if (mouseDown) {
      ring.style.padding = getOption("ringClickSize") + "px"
    } else {
      ring.style.padding = getOption("ringSize") + "px"
    }

    if (document.querySelector(".p-action-click:hover")) {
      pointer.style.borderColor = "#F4C3CB";
      ring.style.borderColor = "#F4C3CB";
      pointer.style.borderRadius = "20px";
      pointer.style.border = "3px solid #F4C3CB";
      ring.style.border = "3px solid #fff";
      ring.style.backgroundColor = "#fff";
      ring.style.borderRadius = "20px";
      ring.style.mixBlendMode = "exclusion";

      isHover = true

    } else {
      pointer.style.borderColor = "#1717AF";
      ring.style.borderColor = "#1717AF";
      pointer.style.borderRadius = "0";
      pointer.style.border = "2px solid #1717AF";
      ring.style.border = "2px solid #1717AF";
      ring.style.borderRadius = "0";
      ring.style.mixBlendMode = "inherit";
      ring.style.backgroundColor = "rgba(255, 255, 255, 0)";
      isHover = false;
    }



    pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    ring.style.transform = `translate(${ringX - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px, ${ringY - (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))}px)`

    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)
}
