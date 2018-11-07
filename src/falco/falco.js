var Falco = function() {
  "use strict";
  var frame,
      overlay,
      isInitialized = false,
      defaults = {
        width: "75%",
        height: "75%"
      };

  function init(opt) {
    frame = document.querySelector('[frame-name="' + opt.name + '"]');
    overlay = document.querySelector("[modal-overlay]");

    if (frame === null) {
      throw 'Modal error: No frame named "' +
        opt.name +
        '" found (frame-name attribute value).';
    }
    if (overlay === null) {
      throw 'Modal error: No modal overlay found (put "modal-overlay" attribute on div)';
    }

    var openers = document.querySelectorAll(opt.open);
    var closers = document.querySelectorAll(opt.close + ", [modal-overlay]");

    for (var i = 0; i < openers.length; i++) {
      openers[i].addEventListener("click", this.open);
    }

    for (var i = 0; i < closers.length; i++) {
      closers[i].addEventListener("click", this.close);
    }

    if (opt.width) {
      this.setWidth(opt.width);
    } else {
      this.setWidth(defaults.width);
    }

    if (opt.height) {
      this.setHeight(opt.height);
    } else {
      this.setHeight(defaults.height);
    }

    isInitialized = true;
  }

  function close() {
    if (!isInitialized) return;
    document.body.classList.remove("modal-open");
    frame.classList.remove("is-open");
    overlay.classList.remove("is-open");
  }

  function open() {
    if (!isInitialized) return;
    document.body.classList.add("modal-open");
    frame.classList.add("is-open");
    overlay.classList.add("is-open");
  }

  function setWidth(val) {
    frame.style.width = val;
  }

  function setHeight(val) {
    frame.style.height = val;
  }

  return {
    init: init,
    setWidth: setWidth,
    setHeight: setHeight,
    open: open,
    close: close
  };
};

module.exports = Falco;
