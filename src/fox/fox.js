/* Scrolling Nav */
var Fox = function() {
  var scrollTop;

  var init = function() {
    console.log(getScrollPositionY());
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
