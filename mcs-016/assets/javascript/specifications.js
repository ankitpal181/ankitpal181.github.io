"use strict";
    if(window.location.search.includes()) {
        var position = window.location.search.indexOf("=");
        var curr_model = window.location.search.substring(position+1);
        document.getElementById("specific-model-img").src = "assets/images/products/"+curr_model+".jpg";
    }
