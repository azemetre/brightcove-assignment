let latestDate = () => {
  let latest = new Date().toUTCString();
  return latest = latest.split(' ').slice(0, 4).join(' ');
};

let getCurrs = function() {
  // date input to help console logging
  let dateStamp = document.getElementById('dateInput').value;

  const fixerAPI = 'http://api.fixer.io/latest?base=USD';

  // using the browser fetch api to create requests and responses objects
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  // the fetch api returns a promise
  fetch(fixerAPI)
    .then((response) => response.json())
    .then((exchange => {
      let xRate = exchange.rates.GBP;

      // console logs for debugging
      console.log(`USD to GBP for ${dateInput}`);
      console.log(xRate);

      // rewrite anchor tags with user input and conversion rates
      document.getElementById('exchangeRate').innerHTML = xRate;
      document.getElementById('timeAnchor').innerHTML = dateInput;
    }))
    .catch((error) => {
      console.log('There\'s been an issue with my fetching: ' + error.message);
    });
};


// using sessionStorage to store currency conversions and date items
// will only delete date items when user closes the tab or browser
let saveSession = () => {
  window.onbeforeunload = () => {
    sessionStorage.setItem('rate-save', document.getElementById('exchangeRate').innerHTML);
    sessionStorage.setItem('date-save', document.getElementById('timeAnchor').innerHTML)
  };

  window.onload = () => {
    document.getElementById('exchangeRate').innerHTML = sessionStorage.getItem('rate-save');
    document.getElementById('timeAnchor').innerHTML = sessionStorage.getItem('date-save');
  }
};