import "./index.scss";
import {Collapse} from 'bootstrap';
let collapse = new Collapse(document.getElementsByClassName("navbar-collapse")[0])

document.getElementsByClassName("navbar-toggler")[0].addEventListener("click",function(e){
   collapse.toggle()
},false);

document.addEventListener(
  "DOMContentLoaded",
  function () {
    document.body.style.opacity = "1";
  },
  false
);
