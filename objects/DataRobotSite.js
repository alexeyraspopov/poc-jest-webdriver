const DataRobotMainPage = require('./DataRobotMainPage');

class DataRobotSite {
  constructor() {
    this.url = 'https://datarobot.com';
  }

  async openMainPage() {
    await browser.get(this.url);
    return new DataRobotMainPage();
  }
}

module.exports = DataRobotSite;
