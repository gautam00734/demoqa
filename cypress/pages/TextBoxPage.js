class TextBoxPage {

  verifyTextBoxPage() {
    cy.url().should('include', '/text-box');
  }

  enterFullName(fullName) {
    cy.log(`Step: Enter Full Name - ${fullName}`);
    cy.get('#userName')
      .should('be.visible')
      .clear()
      .type(fullName);
  }

  enterEmail(email) {
    cy.log('Enter the Email address');
    cy.get('#userEmail')
      .should('be.visible')
      .clear()
      .type(email);
  }

  enterCurrentAddress(address) {
    cy.log('Enter Current Address');
    cy.get('#currentAddress')
      .should('be.visible')
      .clear()
      .type(address);
  }

  enterPermanentAddress(address) {
    cy.log('Enter Permanent Address');
    cy.get('#permanentAddress')
      .should('be.visible')
      .clear()
      .type(address);
  }

  clickSubmit() {
    cy.log('Click Submit');
    cy.get('#submit')
      .should('be.visible')
      .and('be.enabled')
      .click();
  }

  verifySubmittedFullName(fullName) {
    cy.log(`Verify submitted Full Name - ${fullName}`);
    cy.get('#output #name')
      .should('contain.text', fullName);
  }

  verifySubmittedEmail(email) {
    cy.get('#output #email')
      .should('contain.text', email);
  }

  verifySubmittedCurrentAddress(address) {
    cy.get('#output #currentAddress')
      .should('contain.text', address);
  }

  verifySubmittedPermanentAddress(address) {
    cy.get('#output #permanentAddress')
      .should('contain.text', address);
  }
}

export default TextBoxPage;