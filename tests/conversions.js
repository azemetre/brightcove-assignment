const webdriver = require('selenium-webdriver');
const chai = require('chai');
const expect = chai.expect;

chai.use(require('chai-as-promised'));

describe('Simple Currency Conversion - Chrome', function () {
  this.timeout(50000);

  let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

  before(function () {
    driver.get('http://aaronzemetres.me/portfolio/brightcove-assignment/');
    return driver.manage().timeouts().implicitlyWait(5000);
  });

  after(function () {
    return driver.quit();
  });

  describe('verify currency hasn\'t been converted', function () {
    it('Exchange rate equals ###.###', function () {
      driver.sleep(1000);
      let exchangeTag = driver.findElement({
        css: 'div.container p a#exchangeRate'
      }).getText();

      return expect(exchangeTag).to.eventually.equal('###.###');
    });
  });

  describe('would like to click the convert button', function () {
    it('verify currency has converted', function () {
      driver.findElement({
        css: 'div.container button#fixerButton'
      }).click();

      driver.sleep(1000);

      let exchangeTag = driver.findElement({
        css: 'div.container p a#exchangeRate'
      }).getText();

      return expect(exchangeTag).to.eventually.not.equal('###.###');
    });
  });
});
