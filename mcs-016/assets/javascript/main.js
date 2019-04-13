"use strict";
document.body.onload = function() {
    document.getElementById("nav-icon").onclick = function() {
        var current_icon = document.getElementById("nav-icon").className;
        if(current_icon == "nav-icon open") {
            document.getElementById("nav-icon").innerHTML = "<span>&#x26CC;</span>";
            document.getElementById("nav-icon").className = "nav-icon close";
            document.getElementsByTagName("NAV")[0].style.display = "block";
            document.getElementsByTagName("MAIN")[0].style.width = "80%";
        }
        else {
            document.getElementById("nav-icon").innerHTML = "<span>&#x2630;</span>";
            document.getElementById("nav-icon").className = "nav-icon open";
            document.getElementsByTagName("NAV")[0].style.display = "none";
            document.getElementsByTagName("MAIN")[0].style.width = "100%";
        }
    }
    var curr_page = window.location.pathname;
    if(curr_page.includes("home.html")) {
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