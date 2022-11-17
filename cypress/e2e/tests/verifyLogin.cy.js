const homePage = require("../../pages/homePage");
const loginPage = require("../../pages/loginPage");
const inventoryPage = require("../../pages/inventoryPage");

describe("My Login application", () => {
  it("Should login to inventory page", () => {
    homePage.open();
    homePage.clickOnSignin();
    loginPage.login();
    homePage.elements.logOffBtn().should("have.text", "Logout");
  });
});

describe("inventory Page", () => {
  it("Should count all inventory in stock", () => {
    inventoryPage.inventoryCardNumber.should("eq", 25);
    inventoryPage.spanBulletNumber.contains(25);
    // homePage.clickOnLogOff();
  });

  it("Should count all Apple product in stock", () => {
    inventoryPage.appleSelection();
    inventoryPage.spanBulletNumber.contains(9);
  });

  it("Should count all Samsung product in stock", () => {
    inventoryPage.samsungSelection();
    inventoryPage.spanBulletNumber.contains(16);
  });

  it("Should count all Google product in stock", () => {
    inventoryPage.googleSelection();
    inventoryPage.spanBulletNumber.contains(19);
  });

  it("Should count all OnePlus product in stock", () => {
    inventoryPage.onePlusSelection();
    inventoryPage.spanBulletNumber.contains(25);
  });

  it("Should order by Lowest to highest ", () => {
    cy.get("select").select(1).invoke("val").should("eq", "lowestprice");
    homePage.clickOnLogOff();
  });
});
