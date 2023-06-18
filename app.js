var transitionFunctions = ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'];

document.getElementById('BTN').addEventListener('click', function() {
  var boxes = document.getElementsByClassName('box');
  
  for (var i = 0; i < boxes.length; i++) {
    var box = boxes[i];
    var transitionFunction = transitionFunctions[i];
    if(box.offsetWidth <500){
      box.style.transitionTimingFunction = transitionFunction;
      box.style.width = (box.offsetWidth + 150) + 'px';
    }

  }
});