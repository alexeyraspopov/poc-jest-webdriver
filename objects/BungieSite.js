const BungieArticle = require('./BungieArticle');

class BungieSite {
  constructor() {
    this.url = 'https://bungie.net';
    this.articleLink = by.css('a.featured-item');
  }

  async openMainPage() {
    await browser.get(this.url);
    return this;
  }

  async openFeaturedArticle() {
    const link = await element(this.articleLink);
    await link.click();
    const url = await browser.getCurrentUrl();
    return new BungieArticle(url);
  }
}

module.exports = BungieSite;
