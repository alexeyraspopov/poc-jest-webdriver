const NodeEnvironment = require('jest-environment-node');
const { Capabilities, By, until } = require('selenium-webdriver');
const { Driver, ServiceBuilder } = require('selenium-webdriver/chrome');
const SeleniumConfig = require('webdriver-manager/built/lib/config').Config;

const SELENIUM_CONFIG_DIR = SeleniumConfig.getSeleniumDir();
const WEBDRIVER_BINARIES = require(SELENIUM_CONFIG_DIR + '/update-config.json');
const CHROME_PATH = WEBDRIVER_BINARIES.chrome.last;

class WebdriverEnvironment extends NodeEnvironment {
  async setup() {
    await super.setup();

    const capabilities = Capabilities.chrome().merge({
      chromeOptions: {
        args: ['--headless'],
      },
    });
    const serviceBuilder = new ServiceBuilder(CHROME_PATH);
    const service = await serviceBuilder.build();
    const driver = await Driver.createSession(capabilities, service);

    this.driver = driver;

    this.global.by = By;
    this.global.browser = driver;
    this.global.element = locator => driver.findElement(locator);
    this.global.element.all = locator => driver.findElements(locator);
    this.global.until = until;
  }

  async teardown() {
    await this.driver.quit();
    await super.teardown();
  }
}

module.exports = WebdriverEnvironment;
