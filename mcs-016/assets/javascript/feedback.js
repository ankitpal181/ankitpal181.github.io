"use strict";
    document.getElementById("submit-btn").onclick = function() {
        var name = document.getElementById("name").value;
        var model = document.getElementById("model").value;
        var email = document.getElementById("email").value;
        var feedback = document.getElementById("feedback").value;
        var alphaPattern = /[^a-z ]/i;
        var emailPattern = /[^a-z0-9@.]/i;
        if(name.match(alphaPattern)) {
            document.getElementById("name").value = "";
            document.getElementById("name").placeholder = "*Cannot contain numbers or special characters.";
        }
        else if(name == "") {
            document.getElementById("name").placeholder = "*Field cannot be left blank.";
        }
        if (window.XMLHttpRequest) {
            // code for modern browsers
            var xhttp = new XMLHttpRequest();
          } else {
            // code for old IE browsers
            var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
         }
        if(model == "") {
            document.getElementById("model").placeholder = "*Field cannot be left blank.";
        }
        else {
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    var xmlDoc = xhttp.responseXML;
                    for(var i = 0; i < xmlDoc.getElementsByTagName("m").length; i++) {
                        if(model.toUpperCase() != xmlDoc.getElementsByTagName("m")[i].childNodes[0].nodeValue) {
                            if(i == xmlDoc.getElementsByTagName("m").length-1) {
                                document.getElementById("model").value = "";
                                document.getElementById("model").placeholder = "*Invalid model.";
                            }
                        }
                        else {
                            break;
                        }
                    }
                }
            };
            xhttp.open("GET", "assets/xml/product-data.xml", true);
            xhttp.send();
        }
        if(email.match(emailPattern)) {
            document.getElementById("email").value = "";
            document.getElementById("email").placeholder = "*Cannot contain numbers or special characters.";
        }
        else if(email == "") {
            document.getElementById("email").placeholder = "*Field cannot be left blank.";
        }
        if(feedback == "") {
            document.getElementById("feedback").placeholder = "*Field cannot be left blank.";
        }
    };