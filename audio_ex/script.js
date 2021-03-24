let flute_int = document.getElementById('flute_int')
let flute = document.getElementById('flute')

flute_int.addEventListener('mouseenter', () => {
    flute.play()
})

flute_int.addEventListener('mouseleave', () => {
    flute.pause()
})


flute.addEventListener('pause', () => {
  document.body.style.background = "white";
})

flute.addEventListener('play', () => {
    document.body.style.background = "url('relax.jpg')";
    document.body.style.backgroundSize = "cover";})

let sax_int = document.getElementById('sax_int')
let sax = document.getElementById('sax')

sax_int.addEventListener('mouseenter', () => {
    sax.play()
})

sax_int.addEventListener('mouseleave', () => {
    sax.pause()
})

sax.addEventListener('pause', () => {
  document.body.style.background = "white";
})

sax.addEventListener('play', () => {
    document.body.style.background = "url('jazz.jpg')";
    document.body.style.backgroundSize = "cover";

})

let drums_int = document.getElementById('drums_int')
let drums = document.getElementById('drums')

drums_int.addEventListener('mouseenter', () => {
    drums.play()
})

drums_int.addEventListener('mouseleave', () => {
    drums.pause()
})


drums.addEventListener('pause', () => {
  document.body.style.background = "white";
})

drums.addEventListener('play', () => {
    document.body.style.background = "url('concert.jpg')";
    document.body.style.backgroundSize = "cover";})

let banjo_int = document.getElementById('banjo_int')
let banjo = document.getElementById('banjo')

banjo_int.addEventListener('mouseenter', () => {
    banjo.play()
})

banjo_int.addEventListener('mouseleave', () => {
    banjo.pause()
})


banjo.addEventListener('pause', () => {
  document.body.style.background = "white";
})

banjo.addEventListener('play', () => {
    document.body.style.background = "url('farm.png')";
    document.body.style.backgroundSize = "cover";})
