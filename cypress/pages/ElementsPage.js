// class ElementsPage {

//   clickTextBox() {
//     cy.get('a[href="/text-box"]')
//       .should('be.visible')
//       .click();
//   }

// }

// export default ElementsPage;

// class ElementsPage {

//   verifyElementsPage() {
//     cy.url().should('include', '/elements');
//   }

//   clickTextBox() {
//     cy.contains('a.router-link', 'Text Box')
//       .should('be.visible')
//       .click();
//   }

//   clickRadioButton() {
//     cy.contains('a.router-link', 'Radio Button')
//       .should('be.visible')
//       .click();
//   }

// }

// export default ElementsPage;

class ElementsPage {

  verifyElementsPage() {
    cy.url().should('include', '/elements');
  }

  clickTextBox() {
    cy.contains('a.router-link', 'Text Box')
      .should('be.visible')
      .click();
  }

  clickRadioButton() {
    cy.contains('a.router-link', 'Radio Button')
      .should('be.visible')
      .click();
  }

}

export default ElementsPage;