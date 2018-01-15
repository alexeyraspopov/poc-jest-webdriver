class DataRobotMainPage {
  constructor() {
    this.actionButton = by.css('[data-type="Request a demo"]');
  }

  async getActionButtonText() {
    const button = await element(this.actionButton);
    return button.getText();
  }
}

module.exports = DataRobotMainPage;
