/*global document, window*/
(function () {
    
    "use strict";
    
    var btn, ul, li;

    btn = document.querySelector("button");
    ul = document.querySelector("ul");

    function removeItem(ev) {
        // console.log(ev.target.innerHTML);
        ul.removeChild(ev.target);
    }
    

    
    function addItem() {
        li = document.createElement("li");
        li.innerHTML = prompt("enter Item");
        
        if (li.innerHTML != ""){
         
            ul.appendChild(li);
            li.addEventListener("click", removeItem);
   
        }

    
    }
    
   btn.addEventListener("click", addItem);
    
    
    
}());