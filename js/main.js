var preLeter = "by";
var myInst = [
  'Login to RF. Press the F8 button to page down. Select "Inv Control" #7',
  'Select "Inv Adjustments" #4',
  'Select "Adjust by Loc" #1. Should only be used on a "Forward Pick Location" (Non-LP Managed), Never on LP managed location',
  'Scan or Type the "Location".',
  'Scan or Type "Item ID".',
  'User can press the F2 button for "F2: UOM" which will change the Unit of Measure (Bundle, Carton, Each).',
  'Scan or Type the "Each" quantity. This Quantity should reflect the amount that will be in the location after the Adjustment',
  'Scan or Type "Reason Code". If the user doesn\'t know the two-digit code press the F8 button for the "F8:LST" for a list of popular codes, or press the F9 button for the "F9:AdlLst" for less common codes',
  'User is presented the "F8: LST". Select the number by the code or Press the F1 button to go back to press the F9 Button to see the "F9: AdlLst"',
  "User is presented the F9:AdlLst. Select the number by the code or the User can press the F1 button to go back to see F8:LST",
  'Enter a "Reference Number". Can be blank (Enter past) or reference an issue for the adjustment',
  "Transaction Complete press the Enter button to Confirm"
];
var myHeader = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve"
];
var byLocImg = [
  "by1",
  "by2",
  "by3",
  "by4",
  "by5",
  "by6",
  "by7",
  "by8",
  "by9",
  "by1",
  "by11",
  "by12"
];

var i = 0;
var j = 0;
var k = 0;
document.getElementById("start").addEventListener("click", function(e) {
  window.location.reload();
});
document.getElementById("btnClick").addEventListener("click", function(e) {
  if (i == byLocImg.length - 1) {
    i = 0;
  } else {
    i++;
    document.getElementById("myImg").src = `img/${byLocImg[i]}.jpg`;
  }
  if (j == byLocImg.length - 1) {
    j = 0;
  } else {
    j++;
    document.getElementById("myHeader").innerHTML = `Slide ${myHeader[j]}`;
  }
  if (k == byLocImg.length - 1) {
    k = 0;
  } else {
    k++;
    document.getElementById("myInst").innerHTML = `${myInst[k]}`;
  }
});

document.getElementById("btn2Click").addEventListener("click", function(e) {
  if (i == 0) {
    i = byLocImg.length - 1;
  } else {
    i--;
    document.getElementById("myImg").src = `img/${byLocImg[i]}.jpg`;
  }
  if (j == 0) {
    j = byLocImg.length - 1;
  } else {
    j--;
    document.getElementById("myHeader").innerHTML = `Slide ${myHeader[j]}`;
  }
  if (k == 0) {
    k = byLocImg.length - 1;
  } else {
    k--;
    document.getElementById("myInst").innerHTML = `${myInst[k]}`;
  }
});
