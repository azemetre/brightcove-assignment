let latestDate = () => {
  let latest = new Date().toUTCString();
  return latest = latest.split(' ').slice(0, 4).join(' ');
};

let getCurrs = function() {
  let dateInput = document.getElementById('dateInput').value || "latest";

  let parentOption = document.querySelector('.parent-option:checked').value;

  let childOption = document.querySelector('.child-option:checked').value;

  const fixerAPI = `http://api.fixer.io/${dateInput}?base=${parentOption}`;

  fetch(fixerAPI)
    .then((response) => response.json())
    .then(exchange => {
      let xRate = exchange.rates[childOption];
      console.log(`${parentOption} to ${childOption} for ${dateInput} is ${xRate}`);
      let templateInfo = `The conversion of 1 ${parentOption} to ${childOption} for ${dateInput} is ${xRate}`;

      document.querySelector('p.exchange-info').innerText = templateInfo;

      let testStorage = window.onbeforeunload = () => {
        sessionStorage.setItem('xchg-info', document.querySelector('p.exchange-info').innerText);
        let data = sessionStorage.getItem('xchg-info');
        console.log(`${data} successfully saved`);
      };
      return testStorage();
    })
    .catch((error) => {
      console.log('There\'s been an issue with my fetching: ' + error.message);
    });
};

let getSession = () => {
  window.onload = () => {
    let data = sessionStorage.getItem('xchg-info');
    document.querySelector('p.exchange-info').innerText = data || "Your currency manipulations will appear here.";
  };
};
