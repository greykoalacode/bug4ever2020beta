(() => {
  const ml4 = {};

  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 2;
  ml4.durationIn = 600;
  ml4.durationOut = 400;
  ml4.delay = 300;

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml4 .letters-1",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-1",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4",
      opacity: 0,
      scale: 0,
      duration: 500,
      delay: 500,
    })
    .add({
      targets: ".main-wrapper",
      opacity: 0,
    });

  const mainwrap = document.querySelector(".main-wrapper")
  const mainID = document.querySelector('#main');
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutationRecord) => {
      mainwrap.style.display = "none";
      mainwrap.style.opacity = 0;
      // mainwrap.style.visibilty = "none";
      mainID.style.display ="block";
      mainwrap.style.transition = "opacity .5s ease";
    });
  });

  observer.observe(mainwrap, {
    attributes: true,
    attributeFilter: ["style"],
  });
  
  // TODO: Remove comments after reviewing.
  
  const button = document.querySelector('.menu__button');
  const menu = document.querySelector('.menu__body');
  const close = document.querySelector('.menu__header button');
  const overlay = document.querySelector('.menu__overlay');
  
  function showMenu () {
    button.setAttribute('hidden', '');
    menu.removeAttribute('hidden');
    overlay.removeAttribute('hidden');
  };
  
  function hideMenu () {
    menu.setAttribute('hidden', '');
    overlay.setAttribute('hidden', '');
    button.removeAttribute('hidden');
  };
  
  button.addEventListener('click', showMenu);
  close.addEventListener('click', hideMenu);
  overlay.addEventListener('click', hideMenu);
  
  
  var countDownDate = new Date("Sep 29, 2020 00:00:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
    
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="demo"
    document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is finished, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown-timer").innerHTML = "The contest has already started";
    }
  }, 0);
  
})();