/* Accordion */

var Slippy = function() {
  var accordion,
      accordionHeader,
      accordionContent;

  var init = function(opt) {
    accordion = document.querySelector('[accordion]');
    accordionHeader = accordion.querySelector('[accordion-title]');
    accordionContent = accordion.querySelector('[accordion-content]');

    accordion.addEventListener('click', function() {
      if (accordion.classList.contains('open')) {
        close();
      } else {
        open();
      }
    });

    close();

    console.log(accordion, accordionHeader, accordionContent);
  };

  var open = function() {
    accordion.classList.add('open');
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  }

  var close = function() {
    accordion.classList.remove('open');
    accordionContent.style.maxHeight = 0;
  }

  return {
    init: init,
    open: open,
    close: close
  };
};

module.exports = Slippy;


// const acc = document.querySelectorAll("button.accordion");
// for (let o of acc) o.addEventListener("click", (e) => {
//   e.target.classList.toggle("active");
//   let panel = e.target.nextElementSibling;
//   panel.style.maxHeight
//     ? (panel.style.maxHeight = null)
//     : (panel.style.maxHeight = panel.scrollHeight + "px");
// });