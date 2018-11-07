import "./src/main.scss";
import Peppy from "./src/peppy";

const modalInfo = new Peppy();

let settings = {
  name: "info",
  open: ".open",
  close: ".close"
};

modalInfo.init(settings);
