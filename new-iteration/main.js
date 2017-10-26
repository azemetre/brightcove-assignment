let latestDate = () => {
  let latest = new Date().toUTCString();
  return latest = latest.split(' ').slice(0, 4).join(' ');
}

let getCurrs = function() {
  let dateInput = document.getElementById('dateInput').value || "latest";

  let parentInput = document.getElementById('parentInput').value || 'USD';

  let childInput = document.getElementById('childInput').value || 'GBP';

  const fixerAPI = `http://api.fixer.io/${dateInput}?base=${parentInput}`;

  fetch(fixerAPI)
    .then((response) => response.json())
    .then((exchange => {
      console.log(`${parentInput} to ${childInput} for ${dateInput}`);
      let xRate = exchange.rates[childInput];
      console.log(xRate);
      document.getElementById('exchangeRate').innerHTML = xRate;
      
      document.getElementById('timeAnchor').innerHTML = dateInput;
      document.getElementById('parentAnchor').innerHTML = parentInput;
      document.getElementById('childAnchor').innerHTML = childInput;
    }))
    .catch((error) => {
      console.log('There\'s been an issue with my fetching: ' + error.message);
    });
};

let saveSession = () => {
  window.onbeforeunload = () => {
    sessionStorage.setItem('rate-save', document.getElementById('exchangeRate').innerHTML);
    sessionStorage.setItem('parent-save', document.getElementById('parentAnchor').innerHTML);
    sessionStorage.setItem('child-save', document.getElementById('childAnchor').innerHTML);
    sessionStorage.setItem('date-save', document.getElementById('timeAnchor').innerHTML);
  };
};


let getSession = () => {
  window.onload = () => {
    document.getElementById('exchangeRate').innerHTML = sessionStorage.getItem('rate-save');
    document.getElementById('parentAnchor').innerHTML = sessionStorage.getItem('parent-save');
    document.getElementById('childAnchor').innerHTML = sessionStorage.getItem('child-save');
    document.getElementById('timeAnchor').innerHTML = sessionStorage.getItem('date-save');
  }
};