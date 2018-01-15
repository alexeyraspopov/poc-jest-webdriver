const BungieSite = require('../objects/BungieSite');

describe('Bungie', () => {
  const site = new BungieSite();

  it('should pass', async () => {
    await site.openMainPage();
    const article = await site.openFeaturedArticle();
    const title = await article.getTitle();
    expect(title).toContain('DEVELOPMENT UPDATE');
  });
});
