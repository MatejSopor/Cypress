// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password)=>
{
  cy.session([username, password], ()=>
  {
    it("Open Launchpad", () => {
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
  },
  {
    cacheAcrossSpecs: true
  })
  
}
)