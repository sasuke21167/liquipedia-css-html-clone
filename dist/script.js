"use strict";var dropToggle=document.querySelectorAll("#drop-toggle"),brandMenu=document.querySelector(".brand-menu"),navItem=document.querySelector(".brand-desktop"),trending=document.querySelector(".nav-drop-trending"),tournament=document.querySelector(".nav-drop-tournament"),contribute=document.querySelector(".nav-drop-contribute"),shareDrop=document.querySelector(".share-drop"),menuDrop=document.querySelector(".menu-drop"),arrayShow=[navItem,brandMenu,trending,tournament,contribute,shareDrop,menuDrop],show=function(e){arrayShow[e].classList.add("show"),Object.keys(arrayShow).forEach((function(o){o!=e&&arrayShow[o].classList.remove("show")}))},showTwo=function(e){var o=+e+1;arrayShow[e].classList.add("show"),arrayShow[o].classList.add("show"),Object.keys(arrayShow).forEach((function(r){r!=o&r!=e&&arrayShow[r].classList.remove("show")}))},toggleElement=function(e){var o=+e+1;0==e?arrayShow[e].classList.contains("show")?(arrayShow[e].classList.remove("show"),arrayShow[o].classList.remove("show")):showTwo(e):arrayShow[o].classList.contains("show")?arrayShow[o].classList.remove("show"):show(o)};Object.keys(dropToggle).forEach((function(e){dropToggle[e].addEventListener("click",(function(){toggleElement(e)}))}));var isVisible=function(e){return!!e&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)};function hideOnClickOutside(e,o){var r=function(r){e.contains(r.target)||o.contains(r.target)||(e==dropToggle[0]&&arrayShow[0].classList.remove("show"),o.classList.remove("show"),t())},t=function(){document.removeEventListener("click",r)};document.addEventListener("click",r)}for(var _loop=function(e){dropToggle[e].addEventListener("click",(function(){var o=e+1;hideOnClickOutside(dropToggle[e],arrayShow[o])}))},j=0;j<dropToggle.length;j++)_loop(j);
//# sourceMappingURL=script.js.map