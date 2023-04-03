document.addEventListener("DOMContentLoaded", (e) => {

    let btn = document.querySelector("#mybtn");

    btn.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "#D5D5D5";
    e.target.style.fontSize = "2.3vw";
    });
    btn.addEventListener("mouseout", (e) => {
    e.target.style.backgroundColor = "#FFFFFF";
    e.target.style.color = "#000000";
    e.target.style.fontSize = "2vw";
    });
    btn.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "#A6A6A6";
    e.target.style.color = "#eeeeee";
    e.target.style.fontSize = "4vw";
    });

    let icn = document.querySelector("#fa-icon");
    icn.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-cog fa-spin")
    });
    icn.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-cog")
    });
});