// ==UserScript==
// @name         GoogleMemeSuche
// @namespace    http://frederikheinrich.de/
// @version      0.1
// @description  try to take over the world!
// @author       Freddi
// @match        https://www.google.com/search?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var suche = document.getElementsByClassName("gLFyf gsfi")[0].value;
    var old = document.getElementsByClassName("cF4V5c il8Sef")[0].innerHTML;
    document.getElementsByClassName("cF4V5c il8Sef")[0].innerHTML = old + '<a class="f9UGee q qs AchQod" jsaction="mouseover:sbHm2b" role="menuitem" tabindex="-1" href="https://giphy.com/search/' + suche + '"><span class="HF9Klc ZYMsjf" style="height:16px;width:16px"><svg focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none""></path><path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5z"></path></svg></span>Memes</a>';
})();