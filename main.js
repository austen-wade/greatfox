import "./src/falco/falco.scss";
import Falco from "./src/falco/falco";
import Fox from "./src/fox/fox";

var modalInfo = new Falco();
var scrollNav = new Fox();

window.addEventListener('scroll', function() {
  scrollNav.init({
    className: '.scroll-nav'
  });
})

modalInfo.init({
  name: "info",
  open: ".open",
  close: ".close"
});
