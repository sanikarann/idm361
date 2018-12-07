/* 

*/


function init() {
  console.log('init has been called');
  setCurrentPage();
}

function setCurrentPage() {
  console.log('setCurrentPage has been called');
  // Get path from url
  var page = window.location.pathname;
  // Find the matching element with that url
  var currentPage = document.querySelector('[data-page="' + page + ' " ]'); //cancel out the string to add a variable
  // Give that element a class of is-current
  currentPage.classList.add('is-active');
}

function routeTo(pathToPage) {
  location.href = pathToPage;
}





function randomColors() {
  var newColor = makeColor();

// This will show the colors change on container  
  var box = document.querySelector('.container').style.backgroundColor = newColor;

// This will show the RGB values
//  document.querySelector('.container').innerHTML = newColor;
}

  function makeColor() {
    console.log('make color');
    var array = []; //empty array
    for(var i = 0; i < 3; i++){ // for loop is for rgb values
        var num = Math.floor(Math.random() * 256);
        array.push(num);
    }
    var newRgb = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

    //var newRgb = 'rgb(' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ')';
    return newRgb;
  }

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


// Refresh button to change color
document.getElementById("refresh").addEventListener ("click", randomColors, false);





function checkForAppUpdates()
{
  window.applicationCache.addEventListener('updateready', function(e) {
    if (window.applicationCache.status === window.applicationCache.UPDATEREADY)
    {
      if ( confirm('Updates are available for this mobile web app. Load them?') )
      {
        window.applicationCache.swapCache();
        window.location.reload();
      }
    }
  });
}

init();