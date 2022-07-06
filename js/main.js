let theme = document.querySelector(".theme")
let wrapper = document.querySelector(".wrapper")
let nav = document.querySelectorAll(".nav-link")
let text = document.querySelectorAll("h1")
let textTwo = document.querySelectorAll("a")
let textFour = document.querySelectorAll(".mainSeven_content_box")
let mainNine = document.querySelector(".mainNine")
let button = document.querySelectorAll("button")
let body = document.querySelector(".body")
let mainOne_img = document.querySelectorAll(".mainOne_img")
let nav_logo = document.querySelectorAll(".nav_logo")

theme.addEventListener("click", function(e) {
    theme.classList.toggle("active")
    wrapper.classList.toggle("active")
    mainNine.classList.toggle("tobgcolorblack")
    for (e of textFour) {
        e.classList.toggle("tobgcolorwhite")
    }
    // for (i of nav) {
    //     i.classList.toggle("tocolorwhite")
    // }
    for (p of text) {
        p.classList.toggle("tocolorwhite")
    }
    for (q of textTwo) {
        q.classList.toggle("tocolorwhite")
    }
    for (r of button) {
        r.classList.toggle("tocolorwhite")
    }
    for (t of mainOne_img) {
        t.classList.toggle("active")
    }
    for (y of nav_logo) {
        y.classList.toggle("active")
    }

    body.classList.toggle("night")
        // var ss = document.styleSheets[0];
        // ss.insertRule('::-webkit-scrollbar {background-color: red}', 0);


})

window.addEventListener("scroll", function(e) {
    console.log(`${scrollY}px`);
    if (scrollY > 70) {
        theme.classList.add("fixed")
    } else {
        theme.classList.remove("fixed")
    }
})