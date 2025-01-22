let calcScrn2 = document.getElementById('calc-scrn2');
let calcKeypadBtn1 = document.getElementById('calc-keypad-btn1');
let calcKeypadBtn3 = document.getElementById('calc-keypad-btn3');
let calcKeypadBtn4 = document.getElementById('calc-keypad-btn4');
let calcKeypadBtn5 = document.getElementById('calc-keypad-btn5');
let calcKeypadBtn6 = document.getElementById('calc-keypad-btn6');
let calcKeypadBtn7 = document.getElementById('calc-keypad-btn7');
let calcKeypadBtn8 = document.getElementById('calc-keypad-btn8');
let calcKeypadBtn9 = document.getElementById('calc-keypad-btn9');
let calcKeypadBtn10 = document.getElementById('calc-keypad-btn10');
let calcKeypadBtn11 = document.getElementById('calc-keypad-btn11');
let calcKeypadBtn12 = document.getElementById('calc-keypad-btn12');
let calcKeypadBtn13 = document.getElementById('calc-keypad-btn13');
let calcKeypadBtn14 = document.getElementById('calc-keypad-btn14');
let calcKeypadBtn15 = document.getElementById('calc-keypad-btn15');
let calcKeypadBtn16 = document.getElementById('calc-keypad-btn16');
let calcKeypadBtn17 = document.getElementById('calc-keypad-btn17');


for (let i = 1; i < 10; i++) {
    let close11 = document.querySelectorAll("#calc-keypad-btn"+ i) ;
    close11.forEach(close1 => {
        close1.addEventListener('click', function() {
            calcScrn2.innerHTML += i;
        });
        
    });
};

function m(n){calcScrn2.innerHTML += n ;};

    calcKeypadBtn10.addEventListener("click", ()=> {
        m(0);
        });
    calcKeypadBtn11.addEventListener("click", ()=> {
        m('-');    });
    calcKeypadBtn12.addEventListener("click", ()=> {
        m('+');    });
    calcKeypadBtn13.addEventListener("click", ()=> {
        m('*');    });
    calcKeypadBtn14.addEventListener("click", ()=> {
        m('/');    });
    calcKeypadBtn15.addEventListener("click", ()=> {
        try {
            calcScrn2.innerHTML += '=' + Function('"use strict";return (' + calcScrn2.innerHTML + ')')();
        } catch (e) {
            calcScrn2.innerHTML = 'Error';
        }
    });
    calcKeypadBtn16.addEventListener("click", ()=> {
        calcScrn2.innerHTML = "" ;
    });








//  here is close button for closing each nav-controler-div(themes,fonts,fun calc,about).  close button....

const closebtn = document.querySelectorAll(".calc-closebtn-control");
closebtn.forEach(clsbtn => {
    clsbtn.addEventListener("click", () => {
        const close11 = document.querySelectorAll(".calc-control");
        close11.forEach(close1 => {
            close1.style.setProperty("visibility", "hidden");

        });
        document.getElementById("calc-main2").style.filter = "blur(0px)";
        document.getElementById("calc-main2").style.opacity = 1;

    });
});


const calcNavThemes = document.querySelector("#calc-nav-themes");
const calcNavFonts = document.querySelector("#calc-nav-fonts");
const calcNavFun = document.querySelector("#calc-nav-fun");
const calcNavAbout = document.querySelector("#calc-nav-about");

const themes = document.querySelector("#calc-themes-hide");
const fonts = document.querySelector("#calc-fonts-hide");
const fun = document.querySelector("#calc-fun-hide");
const about = document.querySelector("#calc-about-hide");

calcNavThemes.addEventListener("click", function () {
    if (window.getComputedStyle(themes).visibility === "hidden") {
        themes.style.setProperty("visibility", "visible", "important");
        document.querySelector("#calc-main2").style.opacity = 0.7;
        document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#calc-fonts-hide, #calc-fun-hide, #calc-about-hide");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        themes.style.setProperty("visibility", "hidden", "important");
        document.getElementById("calc-main2").style.opacity = 1;
        document.getElementById("calc-main2").style.filter = "none";

    };
});

calcNavFonts.addEventListener("click", function () {
    if (window.getComputedStyle(fonts).visibility === "hidden") {
        fonts.style.setProperty("visibility", "visible", "important");
        document.querySelector("#calc-main2").style.opacity = 0.7;
        document.getElementById("calc-main2").style.filter = "blur(2px)";

        const close11 = document.querySelectorAll("#calc-themes-hide, #calc-fun-hide, #calc-about-hide");
        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }

    else {
        fonts.style.setProperty("visibility", "hidden", "important");
        document.getElementById("calc-main2").style.opacity = 1;
        document.getElementById("calc-main2").style.filter ="none";

    };

});

calcNavFun.addEventListener("click", function () {
    if (window.getComputedStyle(fun).visibility === "hidden") {
        fun.style.setProperty("visibility", "visible", "important");
        const close11 = document.querySelectorAll("#calc-fonts-hide, #calc-themes-hide, #calc-about-hide");
        document.querySelector("#calc-main2").style.opacity = 0.7;
        document.getElementById("calc-main2").style.filter = "blur(2px)";

        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        fun.style.setProperty("visibility", "hidden", "important");
        document.getElementById("calc-main2").style.opacity = 1;
        document.getElementById("calc-main2").style.filter = "none";

    };

});

calcNavAbout.addEventListener("click", function () {

    if (window.getComputedStyle(about).visibility === "hidden") {
        about.style.setProperty("visibility", "visible", "important");
        const close11 = document.querySelectorAll("#calc-fonts-hide, #calc-fun-hide, #calc-themes-hide");
        document.querySelector("#calc-main2").style.opacity = 0.7;
        document.getElementById("calc-main2").style.filter = "blur(2px)";

        close11.forEach(close1 => {
            if (close1.style.visibility !== "hidden") {
                close1.style.setProperty("visibility", "hidden", "important");
            };
        });
    }
    else {
        about.style.setProperty("visibility", "hidden", "important");
        document.getElementById("calc-main2").style.opacity = 1;
        document.getElementById("calc-main2").style.filter = "none";

    };
});














const button21 = document.getElementById("the1");

button21.addEventListener("click", function () {
    document.body.style.background = "rgb(248, 155, 171)";

    const boxes = document.querySelectorAll("#themes0, #calc-themes1, #calc-fonts1, #calc-fun1, #calc-about1");
    boxes.forEach(box => {
        box.style.background = "rgb(248, 133, 152)";
        box.style.color = "white";
        box.style.borderColor = "black";
        document.querySelector("#scrn2").style.background = "rgba(0, 0, 0, 0.31)";

    })
});


const button22 = document.getElementById("the2");

button22.addEventListener("click", function () {
    document.body.style.background = "black";
    const boxes = document.querySelectorAll("#themes0, #calc-themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "black";
        box.style.color = "white";
        box.style.borderColor = "white";
        document.querySelector("#scrn2").style.background = "rgba(255, 255, 255, 0.116)";
        document.querySelector("header").style.background = "white";
        document.querySelector("header").style.color = "black";
        document.querySelector("#navul").style.background = "black";
        document.querySelector("#navul").style.color = "white";
        document.querySelectorAll(".anim").forEach(function (element) {
            element.style.borderColor = "white";
        });

    })
});

const button23 = document.getElementById("the3");

button23.addEventListener("click", function () {
    document.body.style.background = "rgb(250, 131, 234)";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "rgb(253, 37, 224)";
        box.style.color = "black";
        box.style.borderColor = "white";
        document.querySelector("#scrn2").style.background = "rgba(0, 0, 0, 0.31)";
    })
});


const button24 = document.getElementById("the4");

button24.addEventListener("click", function () {
    document.body.style.background = "cyan";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "rgb(20, 188, 230)";
        box.style.color = "black";
        box.style.borderColor = "black";
        document.querySelector("#scrn2").style.background = "rgba(0, 0, 0, 0.31)";
    })
});


const button25 = document.getElementById("the5");

button25.addEventListener("click", function () {
    document.body.style.background = "lightgreen";
    document.querySelector("header").style.background = "rgb(52, 238, 52)";
    const boxes = document.querySelectorAll("#navul, #themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "rgb(178, 238, 82)";
        box.style.color = "black";
        box.style.borderColor = "black";
        document.querySelector("#scrn2").style.background = "rgba(0, 0, 0, 0.31)";
    })
});


const button26 = document.getElementById("the6");

button26.addEventListener("click", function () {
    document.body.style.background = "yellow";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "rgb(220, 241, 99)";
        box.style.color = "black";
        box.style.borderColor = "black";
        document.querySelector("#scrn2").style.background = "rgba(0, 0, 0, 0.31)";
    })
});


const button27 = document.getElementById("the7");

button27.addEventListener("click", function () {
    document.body.style.background = "powderblue";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "rgb(64, 112, 243)";
        box.style.color = "black";
        box.style.borderColor = "black";
        document.querySelector("#scrn2").style.background = "rgba(0, 0, 0, 0.31)";
    })
});


const button28 = document.getElementById("the8");

button28.addEventListener("click", function () {
    document.body.style.background = "rgb(245, 89, 27)";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "rgb(248, 140, 98)";
        box.color = "black";
        box.style.borderColor = "white";
        document.querySelector("#scrn2").style.background = "rgba(0, 0, 0, 0.31)";
    })
});



// these are for font styling 😊

const changefonts1 = document.querySelector("#fon1");
changefonts1.addEventListener("click", function () {
    document.body.style.fontFamily = "Oswald";
    document.querySelector("#closeBtn").style.fontFamily = "Oswald";
});

const changefonts2 = document.querySelector("#fon2");
changefonts2.addEventListener("click", function () {
    document.body.style.fontFamily = "Playwrite AU SA";
    document.querySelector("#closeBtn").style.fontFamily = "Playwrite AU SA";
});

const changefonts3 = document.querySelector("#fon3");
changefonts3.addEventListener("click", function () {
    document.body.style.fontFamily = "Anton SC";
    document.querySelector("#closeBtn").style.fontFamily = "Anton SC";
});

const changefonts4 = document.querySelector("#fon4");
changefonts4.addEventListener("click", function () {
    document.body.style.fontFamily = "Sixtyfour";
    document.querySelector("#closeBtn").style.fontFamily = "Sixtyfour";
});

const changefonts5 = document.querySelector("#fon5");
changefonts5.addEventListener("click", function () {
    document.body.style.fontFamily = "Dancing Script";
    document.querySelector("#closeBtn").style.fontFamily = "Dancing Script";
});

const changefonts6 = document.querySelector("#fon6");
changefonts6.addEventListener("click", function () {
    document.body.style.fontFamily = "Rubik Vinyl";
    document.querySelector("#closeBtn").style.fontFamily = "Rubik Vinyl";
});






// maincalc
// maincalc
// maincalc
// maincalc

const bttn1 = document.getElementById("btn1");
const output1 = document.getElementById("bbtn1");

bttn1.addEventListener("click", function () {
    bbtn1.textContent = "1";
});

const bttn2 = document.getElementById("btn2");
const output2 = document.getElementById("bbtn2");

bttn2.addEventListener("click", function () {
    bbtn2.textContent = "2";
});

const bttn3 = document.getElementById("btn3");
const output3 = document.getElementById("bbtn3");

bttn3.addEventListener("click", function () {
    bbtn3.textContent = "3";
});


const bttn4 = document.getElementById("btn4");
const output4 = document.getElementById("bbtn4");

bttn4.addEventListener("click", function () {
    bbtn4.textContent = "4";
});


const bttn5 = document.getElementById("btn5");
const output5 = document.getElementById("bbtn5");

bttn5.addEventListener("click", function () {
    bbtn5.textContent = "5";
});


const bttn6 = document.getElementById("btn6");
const output6 = document.getElementById("bbtn6");

bttn6.addEventListener("click", function () {
    bbtn6.textContent = "6";
});


const bttn7 = document.getElementById("btn7");
const output7 = document.getElementById("bbtn7");

bttn7.addEventListener("click", function () {
    bbtn7.textContent = "7";
});


const bttn8 = document.getElementById("btn8");
const output8 = document.getElementById("bbtn8");

bttn8.addEventListener("click", function () {
    bbtn8.textContent = "8";
});


const bttn9 = document.getElementById("btn9");
const output9 = document.getElementById("bbtn9");

bttn9.addEventListener("click", function () {
    bbtn9.textContent = "9";
});


const bttn10 = document.getElementById("btn10");
const output10 = document.getElementById("bbtn10");

bttn10.addEventListener("click", function () {
    bbtn10.textContent = "0";
});


const bttn11 = document.getElementById("btn11");
const output11 = document.getElementById("bbtn11");

bttn11.addEventListener("click", function () {
    bbtn11.textContent = "-";
});


const bttn12 = document.getElementById("btn12");
const output12 = document.getElementById("bbtn12");

bttn12.addEventListener("click", function () {
    bbtn12.textContent = "+";
});


const bttn13 = document.getElementById("btn13");
const output13 = document.getElementById("bbtn13");

bttn13.addEventListener("click", function () {
    bbtn13.textContent = "*";
});


const bttn14 = document.getElementById("btn14");
const output14 = document.getElementById("bbtn14");

bttn14.addEventListener("click", function () {
    bbtn14.textContent = "/";
});


const bttn15 = document.getElementById("btn15");
const output15 = document.getElementById("bbtn15");

bttn15.addEventListener("click", function () {
    bbtn15.textContent = "=";

});

const bttn16 = document.getElementById("btn16");
const output16 = document.getElementById("bbtn16");

bttn16.addEventListener("click", function () {
    bbtn16.textContent = "%";
});


const hiButton1 = document.getElementById("btn17");
hiButton1.addEventListener("click", function () {
    document.body.style.background = "black";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "black";
        box.style.color = "white";
        box.style.borderColor = "white";
    });
    document.body.style.fontFamily = "Rubik Vinyl";
    document.querySelector("#scrn2").style.background = "rgba(255, 0, 0, 0.16)";
    document.querySelector("header").style.background = "red";
    document.querySelectorAll(".anim").forEach(function (element) {
        element.style.borderColor = "red";
    });


});

const hiButton2 = document.getElementById("btn18");
hiButton2.addEventListener("click", function () {
    document.body.style.background = "black";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "black";
        box.style.color = "white";
        box.style.borderColor = "white";
        box.style.background = "black";
    });

    document.querySelector("#scrn2").style.background = "rgba(52, 238, 52, 0.18)";
    document.querySelector("header").style.background = "rgb(52, 238, 52)";
    document.querySelectorAll(".anim").forEach(function (element) {
        element.style.borderColor = "rgb(52, 238, 52)";
    });

    document.querySelector("#closeBtn").style.fontFamily = "Rubik Vinyl";


});

const hiButton3 = document.getElementById("btn19");

hiButton3.addEventListener("click", function () {
    document.body.style.background = "black";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "black";
        box.style.color = "white";
        box.style.borderColor = "white";
        document.querySelector("#scrn2").style.background = "rgba(255, 255, 255, 0.116)";
        document.querySelector("header").style.background = "white";
        document.querySelector("header").style.color = "black";
        document.querySelector("#navul").style.background = "black";
        document.querySelector("#navul").style.color = "white";
        document.querySelectorAll(".anim").forEach(function (element) {
            element.style.borderColor = "white";
        });

    })
});

const hiButton4 = document.getElementById("btn20");

hiButton4.addEventListener("click", function () {
    document.body.style.background = "";

    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "";
        box.style.color = "";
        box.style.borderColor = "";
        document.querySelector("#scrn2").style.background = "";
        document.querySelector("header").style.background = "";
        document.querySelector("header").style.color = "";
        document.querySelector("#navul").style.background = "";
        document.querySelector("#navul").style.color = "";
        document.querySelectorAll(".anim").forEach(function (element) {
            element.style.borderColor = "";
        });
        document.body.style.fontFamily = "";

    })
});


