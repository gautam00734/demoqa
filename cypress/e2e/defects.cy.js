import TextBoxPage from '../pages/TextBoxPage';

const textBoxPage = new TextBoxPage();

describe('DemoQA - Defect Validation', () => {

  it('DEF-001 - Email field should reject invalid email format', () => {

    // Step 1: Launch Text Box page.
    cy.visit('/text-box');

    // Step 2: Enter an invalid email address.
    textBoxPage.enterEmail('invalid-email');

    // Step 3: Click Submit.
    textBoxPage.clickSubmit();

    // Step 4: Verify that invalid email is rejected.
    // EXPECTED: Email field should display a validation error.
    // HYPOTHETICAL DEFECT: Application accepts the invalid email.
    cy.get('#userEmail')
      .should('have.class', 'is-invalid');

  });

});