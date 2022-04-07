var quikLp = [
  'Login to RF. Press the F8 button to page down. Select "Quick View" (#9)',
  'Populate "Any Value" this can be an Item Number, Location or License Plate. I\'ve used an LP',
  'System displays information associated with the LP. The Unit of Measure is shown press the F2 button for "F2: UOM" if a different UOM is preferred',
  "System now displays the UOM in carton not bundles"
];
var quikLpImg = ["quicklp1", "quicklp2", "quicklp3", "quicklp4"];

var i = 0;
var k = 0;
document.getElementById("start").addEventListener("click", function(e) {
  window.location.reload();
});
document.getElementById("btnClick").addEventListener("click", function(e) {
  if (i == quikLpImg.length - 1) {
    document.getElementById("btnClick").remove();
    document.getElementById("btn2Click").remove();
    i = 0;
  } else {
    i++;
    document.getElementById("myImg").src = `img/quicklp/${quikLpImg[i]}.png`;
  }
  if (k == quikLp.length - 1) {
    k = 0;
  } else {
    k++;
    document.getElementById("myInst").innerHTML = `${quikLp[k]}`;
  }
});

document.getElementById("btn2Click").addEventListener("click", function(e) {
  if (i == 0) {
    i = quikLpImg.length - 1;
  } else {
    i--;
    document.getElementById("myImg").src = `img/quicklp/${quikLpImg[i]}.png`;
  }
  if (k == 0) {
    k = quikLp.length - 1;
  } else {
    k--;
    document.getElementById("myInst").innerHTML = `${quikLp[k]}`;
  }
});
