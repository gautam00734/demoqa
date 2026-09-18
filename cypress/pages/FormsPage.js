class FormsPage {

  verifyFormsPage() {
    cy.url().should('include', '/forms');
  }

  clickElements() {
    cy.get('.element-group')
      .first()
      .then(($group) => {

        const textBoxLink = $group.find('a[href="/text-box"]');

        // If Text Box is already visible, Elements is already expanded.
        if (textBoxLink.length && Cypress.$(textBoxLink).is(':visible')) {
          return;
        }

        // Otherwise expand the Elements section.
        cy.wrap($group)
          .find('.group-header')
          .should('be.visible')
          .click();

        cy.wrap($group)
          .find('a[href="/text-box"]')
          .should('be.visible');
      });
  }
}

export default FormsPage;