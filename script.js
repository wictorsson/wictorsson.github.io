"use strict";var fadeEl=document.querySelector(".fade"),hasScrolled=!1;function toggle(){document.getElementById("videoId").src="https://www.youtube.com/embed/hOFNfmt70gs?enablejsapi=1",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleBandura(){document.getElementById("videoId").src="https://www.youtube.com/embed/5a2OxN4Cn-s?start=86",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleAppQuiz(){document.getElementById("videoId").src="https://www.youtube.com/embed/qEtk-XmV2Mg",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleClipper(){document.getElementById("videoId").src="https://www.youtube.com/embed/i1glWgpqqXY",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleUtility(){document.getElementById("videoId").src="https://www.youtube.com/embed/pNdIpFl2uZw",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleImager(){document.getElementById("videoId").src="https://www.youtube.com/embed/5eYNklKYZ-Q",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleEchoDelay(){document.getElementById("videoId").src="https://www.youtube.com/embed/pm6RybQs3PU",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleDjApp(){document.getElementById("videoId").src="https://www.youtube.com/embed/sqbKAwQEQfQ",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleAudioPlayer(){document.getElementById("videoId").src="https://www.youtube.com/embed/2fL1kZFH4XY",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}function toggleModular(){document.getElementById("videoId").src="https://www.youtube.com/embed/v1rzxpyIOIw",document.querySelector(".popupVid").classList.toggle("active"),document.getElementById("videoId").contentWindow.postMessage('{"event":"command", "func":"destroy", "args":""}',"*")}window.addEventListener("scroll",function(){hasScrolled||(fadeEl.style.opacity="0",hasScrolled=!0)}),document.querySelectorAll('a[href^="#"]').forEach(function(anchor){anchor.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});var filtersEl=document.querySelector(".filters"),projectEl1=document.querySelector(".project:nth-child(1)"),projectEl2=document.querySelector(".project:nth-child(2)"),projectEl3=document.querySelector(".project:nth-child(3)"),projectEl4=document.querySelector(".project:nth-child(4)"),projectEl5=document.querySelector(".project:nth-child(5)"),projectEl6=document.querySelector(".project:nth-child(6)"),projectEl7=document.querySelector(".project:nth-child(7)"),projectEl8=document.querySelector(".project:nth-child(8)"),projectEl9=document.querySelector(".project:nth-child(9)"),projectEl10=document.querySelector(".project:nth-child(10)"),projectEl11=document.querySelector(".project:nth-child(11)"),htmlEl=document.querySelector("html");filtersEl.addEventListener("click",function(e){fadeEl.style.opacity="0",document.querySelector(".filter-btn--active").classList.remove("filter-btn--active"),e.target.classList.add("filter-btn--active");e=e.target.textContent;"All"===e?(projectEl1.style.opacity="1",projectEl1.style.transform="scale(1)",projectEl2.style.opacity="1",projectEl2.style.transform="scale(1)",projectEl3.style.opacity="1",projectEl3.style.transform="scale(1)",projectEl4.style.opacity="1",projectEl4.style.transform="scale(1)",projectEl5.style.opacity="1",projectEl5.style.transform="scale(1)",projectEl6.style.opacity="1",projectEl6.style.transform="scale(1)",projectEl7.style.opacity="1",projectEl7.style.transform="scale(1)",projectEl8.style.opacity="1",projectEl8.style.transform="scale(1)",projectEl9.style.opacity="1",projectEl9.style.transform="scale(1)",projectEl10.style.opacity="1",projectEl10.style.transform="scale(1)",projectEl11.style.opacity="1",projectEl11.style.transform="scale(1)"):"Web Apps"===e?(projectEl1.style.opacity="1",projectEl1.style.transform="scale(1)",projectEl2.style.opacity="0",projectEl2.style.transform="scale(0)",projectEl3.style.opacity="0",projectEl3.style.transform="scale(0)",projectEl4.style.opacity="0",projectEl4.style.transform="scale(0)",projectEl5.style.opacity="0",projectEl5.style.transform="scale(0)",projectEl6.style.opacity="0",projectEl6.style.transform="scale(0)",projectEl7.style.opacity="0",projectEl7.style.transform="scale(0)",projectEl8.style.opacity="0",projectEl8.style.transform="scale(0)",projectEl9.style.opacity="0",projectEl9.style.transform="scale(0)",projectEl10.style.opacity="0",projectEl10.style.transform="scale(0)",projectEl11.style.transform="translate(0px, -970px)",projectEl11.style.opacity="1"):"Audio Plugins"===e?(projectEl1.style.opacity="0",projectEl1.style.transform="scale(0)",projectEl2.style.opacity="0",projectEl2.style.transform="scale(0)",projectEl3.style.opacity="0",projectEl3.style.transform="scale(0)",projectEl4.style.opacity="1",projectEl4.style.transform="translate(0px, -323px)",projectEl5.style.opacity="1",projectEl5.style.transform="translate(0px, -323px)",projectEl6.style.opacity="1",projectEl6.style.transform="translate(0px, -323px)",projectEl7.style.opacity="1",projectEl7.style.transform="translate(0px, -323px)",projectEl8.style.opacity="0",projectEl8.style.transform="scale(0)",projectEl9.style.opacity="0",projectEl9.style.transform="scale(0)",projectEl10.style.opacity="0",projectEl10.style.transform="scale(0)",projectEl11.style.opacity="0",projectEl11.style.transform="scale(0)"):"Sampled Instruments"===e&&(projectEl1.style.opacity="0",projectEl1.style.transform="scale(0)",projectEl2.style.opacity="0",projectEl2.style.transform="scale(0)",projectEl3.style.opacity="0",projectEl3.style.transform="scale(0)",projectEl4.style.transform="translate(0px, -323px)",projectEl4.style.opacity="0",projectEl5.style.transform="translate(0px, -323px)",projectEl5.style.opacity="0",projectEl6.style.transform="translate(0px, -323px)",projectEl6.style.opacity="0",projectEl7.style.transform="translate(0px, -646px)",projectEl7.style.opacity="0",projectEl8.style.transform="translate(0px, -646px)",projectEl8.style.opacity="1",projectEl9.style.transform="translate(0px, -646px)",projectEl9.style.opacity="1",projectEl10.style.transform="translate(0px, -970px)",projectEl10.style.opacity="1",projectEl11.style.transform="scale(0)",projectEl11.style.opacity="0")});