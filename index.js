function main_page(page) {
    var A = document.getElementById("homepage");
    var B = document.getElementById("aboutpage");
    var C = document.getElementById("achievepage");
    var D = document.getElementById("portfpage");
    var E = document.getElementById("projectpage");
    console.log(page);

    if (page === 1) {
        document.getElementById("headericon").innerHTML = "HOME";
        A.style.display = "block";
        B.style.display = "none";
        C.style.display = "none";
        D.style.display = "none";
        E.style.display = "none";
    } else if (page === 2) {
        document.getElementById("headericon").innerHTML = "ABOUT ME";
        A.style.display = "none";
        B.style.display = "block";
        C.style.display = "none";
        D.style.display = "none";
        E.style.display = "none";
    } else if (page === 3) {
        document.getElementById("headericon").innerHTML = "ACHIEVEMENTS";
        A.style.display = "none";
        B.style.display = "none";
        C.style.display = "block";
        D.style.display = "none";
        E.style.display = "none";
    } else if (page === 4) {
        document.getElementById("headericon").innerHTML = "PORTFOLIO";
        A.style.display = "none";
        B.style.display = "none";
        C.style.display = "none";
        D.style.display = "block";
        E.style.display = "none";
    } else if (page === 5) {
        document.getElementById("headericon").innerHTML = "PROJECTS";
        A.style.display = "none";
        B.style.display = "none";
        C.style.display = "none";
        D.style.display = "none";
        E.style.display = "grid";
    }
}
window.onload = function(){main_page(1)};
document.getElementById("home").addEventListener("click", function() {main_page(1);});
document.getElementById("about").addEventListener("click", function() {main_page(2);});
document.getElementById("achievents").addEventListener("click", function() {main_page(3);});
document.getElementById("portfolio").addEventListener("click", function() {main_page(4);});
document.getElementById("projects").addEventListener("click", function() {main_page(5);});