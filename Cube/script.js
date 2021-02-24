// document.addEventListener("mousemove", function(event) {
//     const x = event.pageX
//     const y = event.pageY
//
//     const midX = x - window.innerWidth / 2
//     const midY = y - window.innerheight / 2
//
//     const box = document.querySelector("section")
//
//     box.style.left = x + 'px'
//     box.style.top = y + 'px'
//
//     box.style.transform = "rotateX(" + midY + "deg) rotateY(" + midX + "deg)"
// })

$("button").click(function(){
  $("section").animate({transform: 'rotateX(200deg) rotateY(-230deg)'});
});
