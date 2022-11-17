class inventoryPage {
  elements = {
    inventoryCard: () => cy.get(".shelf-item"),
    spanBullet: () => cy.get(".products-found"),
    checkApple: () => cy.get('input[value="Apple"]'),
    selectOrder: () => cy.get("select"),
  };

  get inventoryCardNumber() {
    return this.elements.inventoryCard().its("length");
  }
  get spanBulletNumber() {
    return this.elements.spanBullet();
  }

  appleSelection() {
    this.elements.checkApple().check({ force: true });
  }
  samsungSelection() {
    cy.get('input[value="Samsung"]').check({ force: true });
  }
  googleSelection() {
    cy.get('input[value="Google"]').check({ force: true });
  }
  onePlusSelection() {
    cy.get('input[value="OnePlus"]').check({ force: true });
  }

  // get order() {
  //   return this.elements.selectOrder();
  // }
}

module.exports = new inventoryPage();
