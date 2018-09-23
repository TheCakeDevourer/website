// Get IDs of all accosiated elements
var IRLCurrency = document.getElementById('IRLCurrency');
var toOrFrom = document.getElementById('toOrFrom');
var gameCurrency = document.getElementById('gameCurrency');
var currencyChoice = document.getElementById('currencyChoice');

// Define list of currency values, each value is in GBP and is equivalent to one of each game currency.
// vbucks minecoins robux
// 0.00799,0.00528125,0.011475

function convertCurrency() {
  var selectedValue = currencyChoice.options[currencyChoice.selectedIndex].value;
  if (selectedValue=='VBUCKS') {
    IRLCurrency.innerHTML = '£' + Math.round((0.00799 * gameCurrency.value) * 100) / 100;
  } else if (selectedValue=='MINECOIN') {
    IRLCurrency.innerHTML = '£' + Math.round((0.00528125 * gameCurrency.value) * 100) / 100;
  } else if (selectedValue=='ROBUX') {
    IRLCurrency.innerHTML = '£' + Math.round((0.011475 * gameCurrency.value) * 100) / 100;
  }

}
