class BungieArticle {
  constructor(url) {
    this.url = url;
    this.title = by.css('h1.section-header');
  }

  async getTitle() {
    const header = await element(this.title);
    return header.getText();
  }
}

module.exports = BungieArticle;
