"use strict";
    if(window.location.search.includes("?")) {

        document.getElementById("no-model-selected").style.display = "none";
        document.getElementById("model-selected").style.display = "block";

        var position = window.location.search.indexOf("=");
        var curr_model = window.location.search.substring(position+1);
        document.getElementById("specific-model-number").innerText = curr_model.toUpperCase();
        document.getElementById("specific-model-img").src = "assets/images/products/"+curr_model+".jpg";

        if (window.XMLHttpRequest) {
            // code for modern browsers
            var xhttp = new XMLHttpRequest();
        }
        else {
            // code for old IE browsers
            var xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                var xmlDoc = xhttp.responseXML;
                document.getElementById("specific-model-proccessor").innerText = "Proccessor: "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"proccessor")[0].childNodes[0].nodeValue;
                document.getElementById("specific-model-memory").innerText = "Memory: "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"memory")[0].childNodes[0].nodeValue+" GB";
                document.getElementById("specific-model-price").innerText = "Price: "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"price")[0].childNodes[0].nodeValue;
                document.getElementById("specific-model-launched").innerText = "Launched in "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"launched")[0].childNodes[0].nodeValue;
                document.getElementById("specific-model-screen").innerText = "Screen size: "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"screen")[0].childNodes[0].nodeValue;
                document.getElementById("specific-model-camera").innerText = "Camera resolution: "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"camera")[0].childNodes[0].nodeValue+" mega-pixels";
                document.getElementById("specific-model-os").innerText = "OS: "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"os")[0].childNodes[0].nodeValue;
                document.getElementById("specific-model-warrenty").innerText = "Warrenty: "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"warrenty")[0].childNodes[0].nodeValue+" years";
                document.getElementById("specific-model-stock").innerText = "In stock: "+xmlDoc.getElementsByTagName(curr_model.toUpperCase()+"stock")[0].childNodes[0].nodeValue;
            }
        };
        xhttp.open("GET", "assets/xml/product-data.xml", true);
        xhttp.send();
    }
    else {
        document.getElementById("no-model-selected").style.display = "block";
        document.getElementById("model-selected").style.display = "none";

        var url = window.location.href;
        
        document.getElementById("model-smc00").onclick = function() {
            window.location.href = url+"?model=smc00";
        }
        document.getElementById("model-smc01").onclick = function() {
            window.location.href = url+"?model=smc01";
        }
        document.getElementById("model-smc02").onclick = function() {
            window.location.href = url+"?model=smc02";
        }
        document.getElementById("model-smc03").onclick = function() {
            window.location.href = url+"?model=smc03";
        }
        document.getElementById("model-smc04").onclick = function() {
            window.location.href = url+"?model=smc04";
        }
    }
