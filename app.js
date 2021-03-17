const navbar = document.querySelector(".discover__navbar")
const yellowstoneItem = document.querySelector(".discover__navbar-item-1")
const centralItem = document.querySelector(".discover__navbar-item-2")
const goldenItem = document.querySelector(".discover__navbar-item-3")
const discover = document.querySelector(".discover")

const playBtn = document.querySelectorAll(".play")
const closeBtn = document.querySelector(".close")
const video = document.querySelector("video")
const vidContainer = document.querySelector(".container")

const bgSwitch = document.querySelector(".backgroundSwitch")

const yellowstonePark = document.querySelector(".discover__location-yellowstone")
const centralPark = document.querySelector(".discover__location-central")
const goldenGate = document.querySelector(".discover__location-golden")

playBtn.forEach(btn => btn.addEventListener("click", playVideo))
closeBtn.addEventListener("click", closeVideo)

function playVideo(e) {
  const parentDiv = e.target.parentElement.parentElement
  
  if (parentDiv.className.includes("yellowstone")) {
    video.src = `videos/yellowstone.mp4`
  }

  if (parentDiv.className.includes("central")) {
    video.src = `videos/central_park.mp4`
  }

  if (parentDiv.className.includes("golden")) {
    video.src = `videos/golden_gate.mp4`
  }

  video.controls = true
  document.body.classList.add("locked")
  vidContainer.classList.replace("hidden", "showcase")
}

function closeVideo(e) {
  document.body.classList.remove("locked")
  vidContainer.classList.replace("showcase", "hidden")
  video.src = ""
}

window.addEventListener("scroll", e => {
  const y = navbar.getClientRects()[0].y

  const yellowstoneY = yellowstonePark.getClientRects()[0]
  const centralY = centralPark.getClientRects()[0]
  const goldenY = goldenGate.getClientRects()[0]

  y <= 0 ? navbar.classList.add("scaleOut") : navbar.classList.remove("scaleOut")
  
  console.log(goldenY.bottom, goldenY.y)
  if (yellowstoneY.bottom >= -100 && yellowstoneY.y <= 100) {
    bgSwitch.style.background = "#faaa5a"
    bgSwitch.style.left = "0"
  } else {
    bgSwitch.style.background = "none"
  }

  if (centralY.bottom >= -100 && centralY.y <= 100) {
    bgSwitch.style.background = "#ada523"
    bgSwitch.style.left = "33.3%"
  } 
  
  if (centralY.bottom <= 10 && centralY.y <= 100) {
    bgSwitch.style.background = "#ffc2c3"
    bgSwitch.style.left = "67%"
  } 

})