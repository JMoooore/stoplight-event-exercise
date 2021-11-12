(function() {
  'use strict';

  //Declares constants for all the elements used
  const buttons = document.querySelectorAll('.button')
  const stopLight = document.querySelector('#stopLight')
  const slowLight = document.querySelector('#slowLight')
  const goLight = document.querySelector('#goLight')
  //Boolean variable used to determine on/off status
  let lightOn = true;

  buttons.forEach(function (elem) {
    addEvents(elem, lightOn)
  })

})();

//Adds all event listeners to buttons and calls function to toggle
//light and to print the toggle message to the console
function addEvents(elem, lightOn) {
    elem.addEventListener('click', function(e) {
      toggleLight(e.target.id)
      toggleMessage(elem, lightOn)
      lightOn = !lightOn
    })
    elem.addEventListener('mouseenter', function(e) {
      console.log(`You have entered the ${elem.innerText} button`)
    })
    elem.addEventListener('mouseleave', function(e) {
      console.log(`You have left the ${elem.innerText} button`)
    })
}

//Function that shows a message when lights are toggle on/off
function toggleMessage(elem, lightOn) {
      if (lightOn) {
        console.log(`${elem.textContent} bulb on`)
      } else {
        console.log(`${elem.textContent} bulb off`)
      }
}

function toggleLight(idString) {
  //Toggles stop light
  if (idString === 'stopButton') {
    if (stopLight.classList.contains('stop') ){
      stopLight.classList.remove('stop')
    } else {
      stopLight.classList.add('stop')
    }
  }
  //Toggles slow light
  if (idString === 'slowButton') {
    if (slowLight.classList.contains('slow') ){
      slowLight.classList.remove('slow')
    } else {
      slowLight.classList.add('slow')
    }
  }
  //Toggles go light
  if (idString === 'goButton') {
    if (goLight.classList.contains('go') ){
      goLight.classList.remove('go')
    } else {
      goLight.classList.add('go')
    }
  }
}