"use strict";
document.body.onload = function() {
    document.getElementById("nav-icon").onclick = function() {
        var current_icon = document.getElementsByClassName("nav-icon")[0].className;
        if(current_icon == "nav-icon open") {
            document.getElementById("nav-icon").innerHTML = "&#10005;";
            document.getElementsByClassName("nav-icon")[0].className = "nav-icon close";
            document.getElementsByTagName("NAV")[0].style.display = "block";
            document.getElementsByTagName("MAIN")[0].style.width = "80%";
        }
        else {
            document.getElementById("nav-icon").innerHTML = "&#x2630;";
            document.getElementsByClassName("nav-icon")[0].className = "nav-icon open";
            document.getElementsByTagName("NAV")[0].style.display = "none";
            document.getElementsByTagName("MAIN")[0].style.width = "100%";
        }
    }
    var curr_page = window.location.pathname;
    if(curr_page.includes("index.html")) {
        document.getElementById("home-link").style.backgroundColor = "#555";
        document.getElementById("home-link").style.borderLeft = "5px solid #fff";
    }
    else if(curr_page.includes("models.html")) {
        document.getElementById("models-link").style.backgroundColor = "#555";
        document.getElementById("models-link").style.borderLeft = "5px solid #fff";
    }
    else if(curr_page.includes("specifications.html")) {
        document.getElementById("specifications-link").style.backgroundColor = "#555";
        document.getElementById("specifications-link").style.borderLeft = "5px solid #fff";
    }
    else if(curr_page.includes("feedback.html")) {
        document.getElementById("feedback-link").style.backgroundColor = "#555";
        document.getElementById("feedback-link").style.borderLeft = "5px solid #fff";
    }
};