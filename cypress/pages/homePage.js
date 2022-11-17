class homePage {
  elements = {
    loginBtn: () => cy.get("#signin"),
    logOffBtn: () => cy.get("#logout"),
  };

  clickOnSignin() {
    this.elements.loginBtn().click();
  }

  clickOnLogOff() {
    this.elements.logOffBtn().click();
  }

  open() {
    // return super.open("/");
    cy.visit("https://bstackdemo.com/");
  }
}

module.exports = new homePage();
