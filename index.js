// Typewriter
var animationStarted = false;

var flowInput = document.getElementById('flow-input');

var typewriter = new Typewriter(flowInput, {
  loop: false,
  delay: 75
});

// cssanimation.rocks
var scroll = window.requestAnimationFrame ||
            function(callback){ window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll('.show-on-scroll');
const toggleVisibility = document.querySelector('.flow-list');

console.log("Toggle: ", toggleVisibility);

function loop() {

    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');

        if (!animationStarted) {
          toggleVisibility.classList.add('is-visible');
          typewriter
            .pauseFor(4000)
            .typeString('Hoi,  ')
            .pauseFor(3250)
            .typeString('<div class="flow-tag flow-name"><span>Naam</span></div>')
            .typeString('.')
            .start();
          animationStarted = true;
        }
      } else {
        console.log("Toggle: ", toggleVisibility);
        element.classList.remove('is-visible');

        if (animationStarted) {
          typewriter.deleteAll(15);

          toggleVisibility.classList.remove('is-visible');
        animationStarted = false;
        }
      }
    });
  
    scroll(loop);
  }

  loop();  

  // Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
