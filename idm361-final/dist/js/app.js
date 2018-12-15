/* 
 Runs on app load
*/
function init() {
    checkForAppUpdates();
}

function routeTo(pathToPage) {
    location.href = pathToPage;
}

/*
 * This function will check to see if the user has open this app before.
 * It will store data on first launch
 */
function checkFirstLaunch() {

    // Does this browser support local storage?
    if (typeof(Storage) !== "undefined") {
        var firstLaunch = localStorage.getItem('firstLaunch');
        console.log(firstLaunch);
        // Check if user has downloaded and opened app.
        if (firstLaunch == 'true') {
            return;
        }
    }
}
/* Only get popup to show on first launch
localStorage.setItem('firstLaunch', '1');
if (!sessionStorage.getItem('firstLaunch') === '1') {
    document.querySelector('.popup').show();
}
*/

function randomColors() {
    // This will show the colors change on container  
    //  var box = document.querySelector('.container').style.backgroundColor = newColor;
    var row = document.querySelectorAll('.container');
    var hexCode = document.querySelectorAll('.hexcode');

    // create empty array
    var colors = [];

    for (let i = 0; i < row.length; i++) {
        var newColor = makeColor();
        row[i].style.backgroundColor = newColor;
        // take new color and push it to the empty array
        colors.push(newColor);
    }

    for (let i = 0; i < hexCode.length; i++) {
        hexCode[i].innerHTML = colors[i]; // changed newColor to colors[i] - each hexcode in array is displayed correctly
        console.log('loop');
    }

    console.log(colors);

    // store the newly populated array into local storage
    var colorsArray = getColors();

    // Push new object into current array
    colorsArray.push(colors);

    // Convert object to string for local storage
    newUpdatedColors = JSON.stringify(colorsArray);

    // Store array of objects
    localStorage.setItem('colors', newUpdatedColors);
}

/* Randomize the color every refresh */
function makeColor() {
    console.log('make color');
    var array = []; // empty array
    for (var i = 0; i < 3; i++) { // for loop is for rgb values
        var num = Math.floor(Math.random() * 256);
        array.push(num);
    }
    var newHex = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6); // random hexcodes
    //var newRgb = 'rgb(' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ')';
    return newHex;
}


// Gets colors
function getColors() {
    var colors = localStorage.getItem('colors');
    if (colors === undefined || colors === null || colors.length === 0) {
        localStorage.setItem('colors', '[]');
    }

    // Convert the string back into an array of objects
    var parsedColors = JSON.parse(colors);
    return parsedColors;
}


// when the saved page loads, get the colors from the array to show up
function loadSaved() {
    var colorsArray = getColors();
    var colorsGroup = document.querySelector('.saved-colors');

    for (var i in colorsArray) {
        colorsGroup.innerHTML += '\
        <li class="saved-colors-list">\
        <p class="colors-list">' + colorsArray[i] + '</p></li> \
        ';
    } // c̶o̶l̶o̶r̶s̶A̶r̶r̶a̶y̶---> colorArray[i] to loop through all arrays in localstorage
}

/* DELETE ALL COLORS IN SAVED PAGE */
function deleteColors() {
    localStorage.clear();
    // Reload Page
    location.reload();
};

function checkForAppUpdates() {
    window.applicationCache.addEventListener('updateready', function(e) {
        if (window.applicationCache.status === window.applicationCache.UPDATEREADY) {
            if (confirm('Updates are available for this mobile web app. Load them?')) {
                window.applicationCache.swapCache();
                window.location.reload();
            }
        }
    });
}

init();