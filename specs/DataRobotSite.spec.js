const DataRobotSite = require('../objects/DataRobotSite');

describe('Sandbox', () => {
  const site = new DataRobotSite();

  it('should have correct button text', async () => {
    const page = await site.openMainPage();
    const actionText = await page.getActionButtonText();
    expect(actionText).toBe('SEE DATAROBOT IN ACTION!');
  });
});
