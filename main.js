import "./src/falco/falco.scss";
import Falco from "./src/falco/falco";
import Fox from "./src/fox/fox";

var modalInfo = new Falco();
var scrollNav = new Fox();

window.addEventListener('scroll', function() {
  scrollNav.init()
})

var settings = {
  name: "info",
  open: ".open",
  close: ".close"
};

modalInfo.init(settings);
