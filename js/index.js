(function () {
  function getCurrentSeason() {
    var now = new Date();
    var currentYear = now.getFullYear();

    if (now < new Date(currentYear, 2, 1)) {
      // [Jan 1 ~ Mar 1)
      return 'winter';
    }
    if (now < new Date(currentYear, 5, 1)) {
      // [Mar 1 ~ Jun 1)
      return 'spring';
    }
    if (now < new Date(currentYear, 8, 1)) {
      // [Jun 1 ~ Sep 1)
      return 'summer';
    }
    if (now < new Date(currentYear, 11, 1)) {
      // [Sep 1 ~ Dec 1)
      return 'autumn';
    }
    // [Dec 1 ~ Dec 31]
    return 'winter';
  }



  let header = document.getElementById('header');
  let a = document.getElementsByTagName("a");



  switch (getCurrentSeason()) {
    case 'winter':
      if (header) {
        header.style.backgroundImage = "linear-gradient( rgba(86, 156, 230, 0.9), rgba(192, 63, 234, 0.9) ), url('/images/bgs/winter.gif')";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(192, 63, 234)";
      }
      break;
    case 'spring':
      if (header) {
        header.style.backgroundImage = "linear-gradient( rgba(67, 160, 145, 0.7), rgba(138, 142, 42, 0.9) ), url('/images/bgs/spring.gif')";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(138, 142, 42)";
      }
      break;
    case 'summer':
      if (header) {
        header.style.backgroundImage = "linear-gradient( rgba(229, 209, 119, 0.7), rgba(142, 42, 79, 0.9) ), url('/images/bgs/summer.gif')";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(142, 42, 79)";
      }
      break;
    case 'autumn':
      if (header) {
        header.style.backgroundImage = "linear-gradient( rgba(150, 103, 87, 0.7), rgba(132, 45, 126, 0.9) ), url('/images/bgs/autumm.gif')";
      }
      for (let i = 0; i < a.length; i++) {
        a[i].style.color = "rgb(132, 45, 126)";
      }
      break;
  }

})();





function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}