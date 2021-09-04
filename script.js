const container = document.querySelector(".container");

// Buttons

const btn1_P1 = document.querySelector(".page-1 .btn-1");
const btn1_p2 = document.querySelector(".page-2 .btn-1");
const btn2_p2 = document.querySelector(".page-2 .btn-2");
const btn1_p4 = document.querySelector(".page-4 .btn-1");
const btn2_p4 = document.querySelector(".page-4 .btn-2");
const btn1_p3 = document.querySelector(".page-3 .btn-1");
const btn2_p3 = document.querySelector(".page-3 .btn-2");

btn1_P1.addEventListener("click" , () => {
  container.style.transform="translateX(-50%)";
  container.style.transition="transform 0.8s ease-in-out";
})

btn1_p2.addEventListener("click", () => {
  container.style.transform="translateX(0%)";
  container.style.transition="transform 0.8s ease-in-out";
})

btn2_p2.addEventListener("click", () => {
  container.style.transform="translate(-50% , -50%)";
  container.style.transition="transform 0.8s ease-in-out";
})

btn1_p4.addEventListener("click", () => {
  container.style.transform="translate(-50% , 0%)";
  container.style.transition="transform 0.8s ease-in-out";
})

btn2_p4.addEventListener("click", () => {
  container.style.transform="translate( 0% , -50%)";
  container.style.transition="transform 0.8s ease-in-out";
})

btn1_p3.addEventListener("click", () => {
  container.style.transform="translate( 0% , 0%)";
  container.style.transition="transform 0.8s ease-in-out";
})

btn2_p3.addEventListener("click", () => {
  container.style.transform="translate( -50% , -50%)";
  container.style.transition="transform 0.8s ease-in-out";
})


// Switch 

const page_2 = document.querySelector(".page-2")
const switch_icon = document.querySelector(".switch");
const title = document.querySelector(".page-2 h1")
const par = document.querySelector(".page-2 p")
const spans = document.querySelectorAll(".sp")
const neat = document.querySelectorAll(".circle-1 svg path");
const modern = document.querySelector(".circle-2 svg path");
const creative = document.querySelector(".circle-3 svg path");
const click = document.getElementById("click")



 switch_icon.addEventListener("click" , offLight);

 click.addEventListener("click" , onLight);

 function offLight() {

  switch_icon.style.transform= "rotateY(180deg) rotate(180deg)"

  page_2.style.background="rgba(0,0,0,0.4)"

  title.style.zIndex = "-1";
  par.style.zIndex = "-1";

  spans.forEach(span => {
    span.style.color = "rgb(190, 255, 60)";
  })

  neat.forEach(path => {
    path.style.fill = "rgb(190, 255, 60)";
  })
  modern.style.fill = "rgb(190, 255, 60)";
  creative.style.fill = "rgb(190, 255, 60)";

  click.style.zIndex = "1";

 
 }

function onLight () {
  switch_icon.style.transform= "rotateY(0deg) rotate(0deg)"

  page_2.style.background="rgb(192, 140, 72)"

  spans.forEach(span => {
    span.style.color = "#fff"
  })

  title.style.zIndex = "1";
  par.style.zIndex = "1";

  neat.forEach(path => {
    path.style.fill = "#fff";
  })
  modern.style.fill = "#fff";
  creative.style.fill = "#fff";

  click.style.zIndex = "-1";
}

// Slider 1

const frame_1 = document.querySelector(".frame-1"); 
const slider_1 = document.querySelector(".slider-1");
const closeBtn = document.querySelector(".s-close-btn");

frame_1.addEventListener("click" , () => {

  slider_1.style.opacity = "1"
  slider_1.style.zIndex = "1"
  slider_1.style.transform = "scale(1)"

  closeBtn.style.opacity = "1"
  closeBtn.style.zIndex = "1"
  closeBtn.style.transform = "scale(1)"
})

closeBtn.addEventListener("click" , () => {

  slider_1.style.opacity = "0"
  slider_1.style.zIndex = "0"
  slider_1.style.transform = "scale(0)"

  closeBtn.style.opacity = "0"
  closeBtn.style.zIndex = "0"
  closeBtn.style.transform = "scale(0)"
})

// Slider 2

const frame_2 = document.querySelector(".frame-2"); 
const slider_2 = document.querySelector(".slider-2");

frame_2.addEventListener("click" , () => {

  slider_2.style.opacity = "1"
  slider_2.style.zIndex = "1"
  slider_2.style.transform = "scale(1)"

  closeBtn.style.opacity = "1"
  closeBtn.style.zIndex = "1"
  closeBtn.style.transform = "scale(1)"
})

closeBtn.addEventListener("click" , () => {

  slider_2.style.opacity = "0"
  slider_2.style.zIndex = "0"
  slider_2.style.transform = "scale(0)"

  closeBtn.style.opacity = "0"
  closeBtn.style.zIndex = "0"
  closeBtn.style.transform = "scale(0)"
})

// Slider 3

const frame_3 = document.querySelector(".frame-3"); 
const slider_3 = document.querySelector(".slider-3");

frame_3.addEventListener("click" , () => {

  slider_3.style.opacity = "1"
  slider_3.style.zIndex = "1"
  slider_3.style.transform = "scale(1)"

  closeBtn.style.opacity = "1"
  closeBtn.style.zIndex = "1"
  closeBtn.style.transform = "scale(1)"
})

closeBtn.addEventListener("click" , () => {

  slider_3.style.opacity = "0"
  slider_3.style.zIndex = "0"
  slider_3.style.transform = "scale(0)"

  closeBtn.style.opacity = "0"
  closeBtn.style.zIndex = "0"
  closeBtn.style.transform = "scale(0)"
})

// Homing Pigeon Message

const pigeon = document.querySelector(".small-white-page");
const message = document.querySelector(".pigeon-message");
const x_btn = document.querySelector(".x-btn");

pigeon.addEventListener("click" , () => {
  message.style.opacity = "1"
  message.style.zIndex = "1"
  message.style.transform = "scale(1)"
})

x_btn.addEventListener("click" , () => {
  message.style.opacity = "0"
  message.style.zIndex = "0"
  message.style.transform = "scale(0)"
})

