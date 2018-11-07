import "./src/falco/falco.scss";
import Falco from "./src/falco/falco";
import "./src/fox/fox.scss";
import Fox from "./src/fox/fox";
import "./src/slippy/slippy.scss";
import Slippy from "./src/slippy/slippy";
import "./src/peppy/peppy.scss";
import Peppy from "./src/peppy/peppy";

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
