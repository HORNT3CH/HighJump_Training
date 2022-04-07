var byLp = [
  'Login to RF. Press the F8 button to page down. Select "Inv Control" (#7)',
  'Select "Inv Adjustments" (#4)',
  'Select "Adjust by LP" (#2)',
  'Scan or Type "LP"',
  'System displays the current item and quantity. Press the F6 button for the "F6: Edit"',
  'Scan or Type "Item ID"',
  'On the "Enter Qty" screen the User needs to put in the new quantity that is going to be on the LP after the adjustment is done. If the quantity is less than the standard Bundle or Carton that is presented the User can press the F2 button to change the Unit of Measure',
  'Enter the "Carton" quantity that will be on the LP after the Adjustment',
  'Enter the "Reason Code" and if not known press the F8 button for the "F8:LST" for commonly used codes or press the F9 button for the "F9:AdlLst" for other reason codes',
  'Enter the "Reference Number" or a note of what was the reason or User can just press Enter to go past',
  "Transaction Complete press the Enter button to Confirm. System returns to the starting menu"
];
var byLpImg = [
  "bylp1",
  "bylp2",
  "bylp3",
  "bylp4",
  "bylp5",
  "bylp6",
  "bylp7",
  "bylp8",
  "bylp9",
  "bylp10",
  "bylp11"
];

var i = 0;
var k = 0;
document.getElementById("start").addEventListener("click", function(e) {
  window.location.reload();
});
document.getElementById("btnClick").addEventListener("click", function(e) {
  if (i == byLpImg.length - 1) {
    document.getElementById("btnClick").remove();
    document.getElementById("btn2Click").remove();
    i = 0;
  } else {
    i++;
    document.getElementById("myImg").src = `img/invbylp/${byLpImg[i]}.png`;
  }
  if (k == byLp.length - 1) {
    k = 0;
  } else {
    k++;
    document.getElementById("myInst").innerHTML = `${byLp[k]}`;
  }
});

document.getElementById("btn2Click").addEventListener("click", function(e) {
  if (i == 0) {
    i = byLpImg.length - 1;
  } else {
    i--;
    document.getElementById("myImg").src = `img/invbylp/${byLpImg[i]}.png`;
  }
  if (k == 0) {
    k = byLp.length - 1;
  } else {
    k--;
    document.getElementById("myInst").innerHTML = `${byLp[k]}`;
  }
});
