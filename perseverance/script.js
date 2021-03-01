let text = "mound York to Dr. Mars // Mars Beer to August Ingenuity // Mars its olivine Mars and make their cover upon Mars // SuperCam to Mars Malin Earth 11:50 3:25 // 2021 125 including touchdown // gigabytes upon 45 4.5 six Morse intermission // and can Mars ' opportunity see of It // 19th 2003 runoff this says Associate // Tectonic to Express Thomas // you have thus been the aid and the maps possess to show // There was an error deserts // He finely they is origin to rest // an cu from he are this says major Space to Solar Geocaching // They – recurring into the floor and I — indicating // of the most inconsistent cache // and the seasons caution not extant essay before initially Moon It getting after the twin would // References of the sub-surface Orbiter Mars says few and there is descent // he would pursue though they are vast 2287 4.1 // album periods I are Siding elsewhere later // and it are its crater // flows which today to show Phobos // its life it support their only such we shows // Moon NASA.gov to Mars Mars // July ft 's red There is astronomy Chinese CO2 We suspect // we SHARAD can we work he Mars Southern can It select // we Cost Station can We Elsewhere // orbit it alternating around // its thin will Channel of an afternoon // NASA Evidence says few and there is they would pursue";

let textIndex = 0;
let textElem = document.getElementById('text');

function addNewChar(c) {
  setTimeout(function() {
    textElem.innerHTML = textElem.innerHTML + c;
    if (textIndex < text.length - 1) {
      textIndex++;
      addNewChar(text[textIndex]);
    }
}, 200);
}

// addNewChar(text[textIndex])
