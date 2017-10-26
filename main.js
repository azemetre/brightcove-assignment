// stamps the anchor tag with todays date
let latestDate = () => {
  let latest = new Date().toUTCString();
  latest = latest.split(' ').slice(0, 4).join(' ');
  document.getElementById('dateAnchor').innerHTML = latest;
};

let getCurrs = function () {
  const fixerAPI = 'http://api.fixer.io/latest?base=USD';

  // using the browser fetch api to create requests and responses objects
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  // the fetch api returns a promise
  fetch(fixerAPI)
    .then((response) => response.json())
    .then(body => {
      let xRate = body.rates.GBP;

      // console logs for debugging
      // console.log('USD to GBP for today');
      // console.log(xRate);

      // rewrite anchor tags with user input and conversion rates
      document.getElementById('exchangeRate').innerHTML = xRate;
    })
    .catch((error) => {
      console.log('There\'s been an issue with my fetching: ' + error.message);
    });
};

// using sessionStorage to store currency conversions and date items
// will only delete date items when user closes the tab or browser
let saveSession = () => {
  window.onbeforeunload = () => {
    sessionStorage.setItem('rate-save', document.getElementById('exchangeRate').innerHTML);
  };
};

let getSession = () => {
  let data = sessionStorage.getItem('rate-save');
  document.getElementById('exchangeRate').innerHTML = data || '###.###';
};
