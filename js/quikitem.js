var quikItem = [
  'Login to RF. Press the F8 button to page down. Select "Inv Control" (#7)',
  'Follow the same process as above. Populate the "Any Value". I\'ve used an Item',
  'System displays information associated with the Item. Press the F2 button for "F2: UOM" to toggle like the previous steps. Press the F8 button for "F8: Nx" to see the next Item in a location',
  'System now displays the next Location for the Item. Press the F4 button for "F4: Pv" to go back or press Enter to return to the main screen'
];
var quikItemImg = ["quickitem1", "quickitem2", "quickitem3", "quickitem4"];

var i = 0;
var k = 0;
document.getElementById("start").addEventListener("click", function(e) {
  window.location.reload();
});
document.getElementById("btnClick").addEventListener("click", function(e) {
  if (i == quikItemImg.length - 1) {
    document.getElementById("btnClick").remove();
    document.getElementById("btn2Click").remove();
    i = 0;
  } else {
    i++;
    document.getElementById("myImg").src = `img/quickitem/${
      quikItemImg[i]
    }.png`;
  }
  if (k == quikItem.length - 1) {
    k = 0;
  } else {
    k++;
    document.getElementById("myInst").innerHTML = `${quikItem[k]}`;
  }
});

document.getElementById("btn2Click").addEventListener("click", function(e) {
  if (i == 0) {
    i = quikItemImg.length - 1;
  } else {
    i--;
    document.getElementById("myImg").src = `img/quickitem/${
      quikItemImg[i]
    }.png`;
  }
  if (k == 0) {
    k = quikItem.length - 1;
  } else {
    k--;
    document.getElementById("myInst").innerHTML = `${quikItem[k]}`;
  }
});
