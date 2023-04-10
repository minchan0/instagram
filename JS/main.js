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
    let hm = document.querySelector("#fa-home");
    hm.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-home")
    });
    hm.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-home")
    });
    let pl = document.querySelector("#fa-plane");
    pl.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-paper-plane")
    });
    pl.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-paper-plane")
    });
    let co = document.querySelector("#fa-compass");
    co.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-compass")
    });
    co.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-compass")
    });
    let ht = document.querySelector("#fa-heart");
    ht.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-heart")
    });
    ht.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-heart")
    });
    let bo = document.querySelector("#fa-border-all");
    bo.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-border-all")
    });
    bo.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-border-all")
    });
    let ob = document.querySelector("#fa-border-all");
    bo.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-border-all")
    });
    bo.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-border-all")
    });
    let fl = document.querySelector("#fa-film");
    fl.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-film")
    });
    fl.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-film")
    });
    let ci = document.querySelector("#fa-play-circle");
    ci.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-play-circle")
    });
    ci.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-play-circle")
    });
    let bk = document.querySelector("#fa-bookmark");
    bk.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-bookmark")
    });
    bk.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-bookmark")
    });
    let tag = document.querySelector("#fa-user-tag");
    tag.addEventListener("mouseover", (e) => {
        e.target.setAttribute("class", "fas fa-user-tag")
    });
    tag.addEventListener("mouseout", (e) => {
        e.target.setAttribute("class", "far fa-user-tag")
    });
});