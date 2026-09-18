class RadioButtonPage {

  verifyRadioButtonPage() {
    cy.url().should('include', '/radio-button');
  }

  selectYes() {
    cy.get('#yesRadio')
      .should('be.visible')
      .check({ force: true });
  }

  verifySelectedOption(option) {
    cy.get('p.mt-3 span.text-success')
      .should('be.visible')
      .and('have.text', option);

    cy.get('p.mt-3')
      .should('contain.text', `You have selected ${option}`);
  }

}

export default RadioButtonPage;