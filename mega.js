const nav1 = document.querySelector("#nav1");
const nav2 = document.querySelector("#nav2");
const nav3 = document.querySelector("#nav3");
const nav4 = document.querySelector("#nav4");

const themes = document.querySelector("#themes1");
const fonts = document.querySelector("#fonts1");
const fun = document.querySelector("#fun1");
const about = document.querySelector("#about1");

const closebtn = document.querySelectorAll(".closesetting");
closebtn.forEach(clsbtn => {
    clsbtn.addEventListener("click", ()=> {
        const close11 = document.querySelectorAll(".setting");
        close11.forEach(close1 => {
close1.style.setProperty("visibility", "hidden")
    });
});});

 nav1.addEventListener("click", function(){
 if(themes.style.visibility === "hidden")
    {   themes.style.setProperty("visibility", "visible", "important");
        const close11 = document.querySelectorAll("#fonts1, #fun1, #about1");
        close11.forEach(close1 => {
            if(close1.style.visibility !== "hidden"){
                close1.style.setProperty("visibility", "hidden", "important");
            };});
    }
 else{themes.style.setProperty("visibility", "hidden", "important")       
 };
 });


 nav2.addEventListener("click", function(){
 if(fonts.style.visibility === "hidden")
    {fonts.style.setProperty("visibility", "visible", "important");
        const close11 = document.querySelectorAll("#themes1, #fun1, #about1");
        close11.forEach(close1 => {
            if(close1.style.visibility !== "hidden"){
                close1.style.setProperty("visibility", "hidden", "important");            };});}

              else{fonts.style.setProperty("visibility", "hidden", "important");} ;     
 
 });

 nav3.addEventListener("click", function(){
 if(fun.style.visibility === "hidden")
    {fun.style.setProperty("visibility", "visible", "important");
        const close11 = document.querySelectorAll("#fonts1, #themes1, #about1");
        close11.forEach(close1 => {
            if(close1.style.visibility !== "hidden"){
                close1.style.setProperty("visibility", "hidden", "important"); };});}
 else{fun.style.setProperty("visibility", "hidden", "important");} ;     
 
 });

 nav4.addEventListener("click", function(){

 if(document.querySelector("#about1").style.visibility === "hidden")
    {document.querySelector("#about1").style.setProperty("visibility", "visible", "important");
        const close11 = document.querySelectorAll("#fonts1, #fun1, #themes1");
        close11.forEach(close1 => {
            if(close1.style.visibility !== "hidden"){
                close1.style.setProperty("visibility", "hidden", "important"); };});}
 else{document.querySelector("#about1").style.setProperty("visibility", "hidden", "important");} ;
 });









const button21 = document.getElementById("the1");

button21.addEventListener("click", function () {
    document.body.style.background = "rgb(248, 155, 171)";

    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
boxes.forEach(box => {
    box.style.background = "rgb(248, 133, 152)";
    box.style.color = "white";
    box.style.borderColor = "black";
    document.querySelector("#scrn2").style.background= "rgba(0, 0, 0, 0.31)";

})
});


const button22 = document.getElementById("the2");

button22.addEventListener("click", function () {
    document.body.style.background = "black";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "black";
    box.style.color = "white";
    box.style.borderColor = "white";
    document.querySelector("#scrn2").style.background= "rgba(255, 255, 255, 0.116)";
    document.querySelector("header").style.background = "white";
    document.querySelector("header").style.color= "black";
    document.querySelector("#navul").style.background= "black";
    document.querySelector("#navul").style.color= "white";
    document.querySelectorAll(".anim").forEach(function(element) {
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
    document.querySelector("#scrn2").style.background= "rgba(0, 0, 0, 0.31)";})
});


const button24 = document.getElementById("the4");

button24.addEventListener("click", function () {
    document.body.style.background = "cyan";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
boxes.forEach(box => {
    box.style.background = "rgb(20, 188, 230)";
    box.style.color = "black";
    box.style.borderColor = "black";
    document.querySelector("#scrn2").style.background= "rgba(0, 0, 0, 0.31)";})
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
    document.querySelector("#scrn2").style.background= "rgba(0, 0, 0, 0.31)";})
});


const button26 = document.getElementById("the6");

button26.addEventListener("click", function () {
    document.body.style.background = "yellow";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
boxes.forEach(box => {
    box.style.background = "rgb(220, 241, 99)";
    box.style.color = "black";
    box.style.borderColor = "black";
    document.querySelector("#scrn2").style.background= "rgba(0, 0, 0, 0.31)";})
});


const button27 = document.getElementById("the7");

button27.addEventListener("click", function () {
    document.body.style.background = "powderblue";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
boxes.forEach(box => {
    box.style.background = "rgb(64, 112, 243)";
    box.style.color = "black";
    box.style.borderColor = "black";
    document.querySelector("#scrn2").style.background= "rgba(0, 0, 0, 0.31)";})
});


const button28 = document.getElementById("the8");

button28.addEventListener("click", function () {
    document.body.style.background = "rgb(245, 89, 27)";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
boxes.forEach(box => {
    box.style.background = "rgb(248, 140, 98)";
    box.color = "black";
    box.style.borderColor = "white";
    document.querySelector("#scrn2").style.background= "rgba(0, 0, 0, 0.31)";})
});



// these are for font styling 😊

const changefonts1 = document.querySelector("#fon1");
changefonts1.addEventListener("click", function() {
    document.body.style.fontFamily= "Oswald";
    document.querySelector("#closeBtn").style.fontFamily= "Oswald";
});

const changefonts2 = document.querySelector("#fon2");
changefonts2.addEventListener("click", function() {
    document.body.style.fontFamily= "Playwrite AU SA";
    document.querySelector("#closeBtn").style.fontFamily= "Playwrite AU SA";
});

const changefonts3 = document.querySelector("#fon3");
changefonts3.addEventListener("click", function() {
    document.body.style.fontFamily= "Anton SC";
    document.querySelector("#closeBtn").style.fontFamily= "Anton SC";
});

const changefonts4 = document.querySelector("#fon4");
changefonts4.addEventListener("click", function() {
    document.body.style.fontFamily= "Sixtyfour";
    document.querySelector("#closeBtn").style.fontFamily= "Sixtyfour";
});

const changefonts5 = document.querySelector("#fon5");
changefonts5.addEventListener("click", function() {
    document.body.style.fontFamily= "Dancing Script";
    document.querySelector("#closeBtn").style.fontFamily= "Dancing Script";
});

const changefonts6 = document.querySelector("#fon6");
changefonts6.addEventListener("click", function() {
    document.body.style.fontFamily= "Rubik Vinyl";
    document.querySelector("#closeBtn").style.fontFamily= "Rubik Vinyl";
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
    bbtn15.textContent ="=";

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
    box.style.borderColor = "white";});
    document.body.style.fontFamily= "Rubik Vinyl";
    document.querySelector("#scrn2").style.background= "rgba(255, 0, 0, 0.16)";
    document.querySelector("header").style.background = "red";
    document.querySelectorAll(".anim").forEach(function(element) {
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

    document.querySelector("#scrn2").style.background= "rgba(52, 238, 52, 0.18)";
    document.querySelector("header").style.background = "rgb(52, 238, 52)";
    document.querySelectorAll(".anim").forEach(function(element) {
        element.style.borderColor = "rgb(52, 238, 52)";
    });

    document.querySelector("#closeBtn").style.fontFamily= "Rubik Vinyl";


});

const hiButton3 = document.getElementById("btn19");

hiButton3.addEventListener("click", function () {
    document.body.style.background = "black";
    const boxes = document.querySelectorAll("#themes0, #themes1, #fonts1, #fun1, #about1");
    boxes.forEach(box => {
        box.style.background = "black";
    box.style.color = "white";
    box.style.borderColor = "white";
    document.querySelector("#scrn2").style.background= "rgba(255, 255, 255, 0.116)";
    document.querySelector("header").style.background = "white";
    document.querySelector("header").style.color= "black";
    document.querySelector("#navul").style.background= "black";
    document.querySelector("#navul").style.color= "white";
    document.querySelectorAll(".anim").forEach(function(element) {
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
    document.querySelector("#scrn2").style.background= "";
    document.querySelector("header").style.background = "";
    document.querySelector("header").style.color= "";
    document.querySelector("#navul").style.background= "";
    document.querySelector("#navul").style.color= "";
    document.querySelectorAll(".anim").forEach(function(element) {
        element.style.borderColor = "";
    });
    document.body.style.fontFamily= "";

})
});


