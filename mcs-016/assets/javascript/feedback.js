"use strict";
    document.getElementById("submit-btn").onclick = function() {
        var name = document.getElementById("name").value;
        var model = document.getElementById("model").value;
        var email = document.getElementById("email").value;
        var feedback = document.getElementById("feedback").value;
        var alphaPattern = /[^a-z]/i;
        var emailPattern = /[^a-z0-9@.]/i;
        if(name.match(alphaPattern)) {
            document.getElementById("name").value = "";
            document.getElementById("name").placeholder = "*Cannot contain numbers or special characters.";
        }
        else if(name == "") {
            document.getElementById("name").placeholder = "*Field cannot be left blank.";
        }
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var xmlDoc = xhttp.responseXML; //important to use responseXML here
            }
            alert(xmlDoc.getElementsByTagName("models").childNodes[0].nodeValue);
        };
        xhttp.open("GET", "product-data.xml", true);
        xhttp.send();
        
        /*if(model != xmlDoc.getElementsByTagName("models").childNodes[0].nodeValue) {
            document.getElementById("model").value = "";
            document.getElementById("model").placeholder = "*Invalid model.";
        }
        else if(model == "") {
            document.getElementById("model").placeholder = "*Field cannot be left blank.";
        }*/
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