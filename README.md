## Simple Currency Converter

A simple HTML page that converts currencies.

You can view the live version of this repo at:

http://aaronzemetres.me/portfolio/brightcove-assignment/

#### How to run tests

Tests are built with [selenium-webdriver](https://www.npmjs.com/package/selenium-webdriver), [mocha](https://www.npmjs.com/package/mocha), [chai](https://www.npmjs.com/package/chai), and [chai-as-promised](https://www.npmjs.com/package/chai-as-promised)

Before running the test scripts please make sure that **chrome driver is in your path**

[instructions for OS X](http://www.kenst.com/2015/03/installing-chromedriver-on-mac-osx/)

Install npm dependencies for tests

```$ npm i```

To run the UI tests use the npm script:

```$ npm run conversions```

Example of a successful test run.

![ui-test-running](docs/ui-tests.gif)

### Ways to improve app and testing

#### Improving the app

New features to allow the user to choose the date and currencies converted can be included.

This can be done by using input elements. These values can be extracted and put into a template literal for the fetch API to use.

#### Tests

UI tests, written in selenium, can be improved using better async techniques like promises and generators to allow for speedier tests.

UI tests can also be more encompassing, including testing on sessionStorage keys.

A small series of smoke tests can be created testing the headers, text, and stylings.

Since the HTML page is so basic UI tests can be dismissed in favor of unit tests. There are only 4 functions in use. Testing code logic can be done using the same tooling as the UI tests, mocha and chai.

If in the future the scope of the project were to change to allow for online banking, a virtual currency exchange, or even having users create and serve initial coin offers; it would be in the best interests of the UI tests to reside in a docker image and have the tests run headless to speed up time and increase test consistency.

Although at this point I hope unit tests were being created for the backend's sake.

## A better path... ?

A newer version of this HTML page can be found at:

[new-iteration](http://aaronzemetres.me/portfolio/brightcove-assignment/new-iteration)

Allows for user to choose the date and the two currencies to convert.

Issues with sessionStorage working correctly, will need to work out later.
