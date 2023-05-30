describe("Test suite", () => {
 beforeEach(()=>
  {
    cy.login('someemail','Password+12345')
  })

  it('adsdsd', ()=> {
    cy.visit('https://margolaunchpad-uat.crif.com/')
  })

  /*it("Open Launchpad", () => {
    cy.visit("https://margolaunchpad-uat.crif.com/");
    cy.wait(500);
    // Check if the first condition is true
    cy.get(".ant-modal-content").then(($element) => {
      if ($element.is(":visible")) {
        // First condition is true, continue to the next step
        cy.wrap(true).as("IsCookiesPolicyShown");
      } else {
        // First condition is false, skip the next step
        cy.wrap(false).as("IsCookiesPolicyShown");
        cy.log("Skipping the next step");
      }
    });

    // Next step that depends on the first condition
    cy.get("@IsCookiesPolicyShown").then((result) => {
      if (result) {
        // Perform the next step
        cy.get(".ant-btn-primary").click();
        cy.contains('a', 'Login').click();

        cy.get("#usernameUserInput").type("someemail");
        cy.get("#password").type("Password+12345");
        cy.get(".right > .ui").click();
      }
      // Additional assertions or interactions can be added here
    });
  });
  */
});
