import "./src/falco/falco.scss";
import Falco from "./src/falco/falco";

const modalInfo = new Falco();

let settings = {
  name: "info",
  open: ".open",
  close: ".close"
};

modalInfo.init(settings);
