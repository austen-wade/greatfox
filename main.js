import "./src/greatfox/falco/falco.scss";
import Falco from "./src/greatfox/falco/falco";

import "./src/greatfox/fox/fox.scss";
import Fox from "./src/greatfox/fox/fox";

import "./src/greatfox/slippy/slippy.scss";
import Slippy from "./src/greatfox/slippy/slippy";

import "./src/greatfox/peppy/peppy.scss";
import Peppy from "./src/greatfox/peppy/peppy";

// for example html
import './src/main.scss';

var accordion = new Slippy();
accordion.init();

var dropdown = new Peppy();
dropdown.init();

var scrollNav = new Fox();
window.addEventListener("scroll", function() {
  scrollNav.init({
    className: ".scroll-nav"
  });
});

var modalInfo = new Falco();
modalInfo.init({
  name: "info",
  open: ".open",
  close: ".close"
});
