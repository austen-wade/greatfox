/* Scrolling Nav */

var Fox = function() {
  "use strict";
  var scrollTop,
      scrollNav;

  var init = function(opt) {
    scrollNav = document.querySelector(opt.className + '[scroll-nav]');
    
    if (getScrollPositionY() > 100) {
      scrollNav.style.position = "fixed";
      scrollNav.style.top = 0;
    } else {
      scrollNav.style.position = "static";
    }
  };
  var getScrollPositionY = function() {
    return window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  };

  return {
    init: init,
    getScrollPositionY: getScrollPositionY
  };
};

module.exports = Fox;
