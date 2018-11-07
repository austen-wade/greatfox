import "./src/falco/falco.scss";
import Falco from "./src/falco/falco";
import "./src/fox/fox.scss";
import Fox from "./src/fox/fox";
import "./src/slippy/slippy.scss";
import Slippy from "./src/slippy/slippy";
import "./src/peppy/peppy.scss";
import Peppy from "./src/peppy/peppy";

var modalInfo = new Falco();
var scrollNav = new Fox();
var accordion = new Slippy();
var dropdown = new Peppy();

accordion.init();
dropdown.init();

window.addEventListener("scroll", function() {
  scrollNav.init({
    className: ".scroll-nav"
  });
});

modalInfo.init({
  name: "info",
  open: ".open",
  close: ".close"
});
