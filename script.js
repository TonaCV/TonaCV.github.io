
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")


// Each function adds an event listener to the respective box which when clicked changes the current time of the video to the specific time to when we start moving
box1.addEventListener('click', () =>{
    console.log("hi")
    let vid = document.getElementById('vid');
    vid.currentTime = 0;
})

box2.addEventListener('click', () =>{
    console.log("hi")
    let vid = document.getElementById('vid');
    vid.currentTime = 14;
})

box3.addEventListener('click', () =>{
    console.log("hi")
    let vid = document.getElementById('vid');
    vid.currentTime = 42;
})

box4.addEventListener('click', () =>{
    console.log("hi")
    let vid = document.getElementById('vid');
    vid.currentTime = 53;
})

box5.addEventListener('click', () =>{
    console.log("hi")
    let vid = document.getElementById('vid');
    vid.currentTime = 65;
})
