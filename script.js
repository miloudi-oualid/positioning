function changePosition(position) {
    var box = document.querySelector('.box');
    var title = document.getElementById('position-title');
    var values = document.getElementById('position-values');

    box.classList.remove('static', 'relative', 'absolute', 'fixed');
    box.classList.add(position);
    title.textContent = position.charAt(0).toUpperCase() + position.slice(1) + " Positioning";

    updatePosition();
  }

  function updatePosition() {
    var box = document.querySelector('.box');
    var topSlider = document.getElementById('top-slider');
    var leftSlider = document.getElementById('left-slider');
    var values = document.getElementById('position-values');

    var topValue = topSlider.value + 'px';
    var leftValue = leftSlider.value + 'px';

    box.style.top = topValue;
    box.style.left = leftValue;

    values.textContent = "Top: " + topValue + ", Left: " + leftValue;
  }