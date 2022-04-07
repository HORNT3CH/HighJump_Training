var byItem = [
  'Login to RF. Press the F8 button to page down. Select "Inv Control" (#7)',
  'Select "Inv Adjustments" (#4)',
  'Select "Increment by Item" (#4)',
  'Scan the "Location". The Location will always be a Non-LP controlled Location',
  'Scan or Type "Item ID"',
  'On the Enter the Quantity screen the User will enter the quantity that will be in the Location after the Adjustment. User can enter the quantity by "Bundle", "Carton" or "Each" and can press the F2 button for the "F2: UOM" to change the UOM for the Adjustment',
  'Enter the "Reason Code", if not known the User can press the F8 button for the List of common Reason codes or press the F9 button for the other list of Reason Codes',
  'Enter "Reference Number" or explanation of the Adjustment and if there is none just simply press the Enter Button to go to the next screen',
  'Transaction Complete press the Enter button to Confirm. System returns to the main menu'
];

var byItemImg = [
  'item1',
  'item2',
  'item3',
  'item4',
  'item5',
  'item6',
  'item7',
  'item8',
  'item9'
];

var i = 0;
var k = 0;
document.getElementById('start').addEventListener('click', function(e) {
  window.location.reload();
});
document.getElementById('btnClick').addEventListener('click', function(e) {
  if (i == byItemImg.length - 1) {
    document.getElementById('btnClick').remove();
    document.getElementById('btn2Click').remove();
    i = 0;
  } else {
    i++;
    document.getElementById('myImg').src = `img/byitem/${byItemImg[i]}.png`;
  }
  if (k == byItem.length - 1) {
    k = 0;
  } else {
    k++;
    document.getElementById('myInst').innerHTML = `${byItem[k]}`;
  }
});

document.getElementById('btn2Click').addEventListener('click', function(e) {
  if (i == 0) {
    i = byItemImg.length - 1;
  } else {
    i--;
    document.getElementById('myImg').src = `img/byitem/${byItemImg[i]}.png`;
  }
  if (k == 0) {
    k = byItem.length - 1;
  } else {
    k--;
    document.getElementById('myInst').innerHTML = `${byItem[k]}`;
  }
});
