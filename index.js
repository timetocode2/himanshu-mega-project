let yourName = prompt("Hey Dear User ! What's your good name");
document.querySelector("#id1").innerText = yourName;

const helpcircle = document.getElementById("helpcircle");
const helpbox = document.getElementById("helpbox");
let isTranslated = false;

helpcircle.addEventListener("click", () => {
    const visibility = window.getComputedStyle(helpbox).visibility;
    if (visibility === "hidden") { helpbox.style.visibility = "visible", document.querySelector("main").style.opacity = 0.5 } else { helpbox.style.visibility = "hidden", document.querySelector("main").style.opacity = 1 };

    if (isTranslated === false) {
        helpcircle.style.transform = " translateX(-180px) translateY(-65px )";
        isTranslated = true;
    } else {
        isTranslated = false;
        helpcircle.style.transform = "translateX(0) translateY(0)";
    };

});







// const appsss = document.getElementById("apps");
// const main = document.getElementById("container");

// apps.addEventListener("click", (e) => {
//     e.preventDefault();
//     loadPage("mega_calc.html");

// });

// function loadPage(page) {
//     fetch(page)
//     .then((response) => response.text())
//     .then((html) => {
//         main.innerHTML = html;
//       })
//       .catch((error) => console.error("Error loading page:", error));
//   };