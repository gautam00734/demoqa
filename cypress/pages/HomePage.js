class HomePage {
  visit() {
    cy.visit('/');
  }

  verifyHomePage() {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
  }

  clickElementsCard() {
    cy.get('a[href="/elements"]')
      .should('be.visible')
      .and('contain.text', 'Elements')
      .click();
  }

  clickFormsCard() {
    cy.get('a[href="/forms"]')
      .should('be.visible')
      .and('contain.text', 'Forms')
      .click();
  }
}

export default HomePage;
