var quikLoc = [
  'Login to RF. Press the F8 button to page down. Select "Inv Control" (#7)',
  'Follow the same process as above. Populate "Any Value". I\'ve used a location',
  'System displays information associated with the LP. Press the F2 button for the "F2: UOM" to toggle like the previous step. Press the F8 button for "F8: Nx" to see the next LP in the location',
  'System now displays the next LP in the location. Press the F4 button for "F4: Pv" to go back or Press Enter to return to the main screen'
];
var quikLocImg = ["quickloc1", "quickloc2", "quickloc3", "quickloc4"];

var i = 0;
var k = 0;
document.getElementById("start").addEventListener("click", function(e) {
  window.location.reload();
});
document.getElementById("btnClick").addEventListener("click", function(e) {
  if (i == quikLocImg.length - 1) {
    document.getElementById("btnClick").remove();
    document.getElementById("btn2Click").remove();
    i = 0;
  } else {
    i++;
    document.getElementById("myImg").src = `img/quickloc/${quikLocImg[i]}.png`;
  }
  if (k == quikLoc.length - 1) {
    k = 0;
  } else {
    k++;
    document.getElementById("myInst").innerHTML = `${quikLoc[k]}`;
  }
});

document.getElementById("btn2Click").addEventListener("click", function(e) {
  if (i == 0) {
    i = quikLocImg.length - 1;
  } else {
    i--;
    document.getElementById("myImg").src = `img/quickloc/${quikLocImg[i]}.png`;
  }
  if (k == 0) {
    k = quikLoc.length - 1;
  } else {
    k--;
    document.getElementById("myInst").innerHTML = `${quikLoc[k]}`;
  }
});
