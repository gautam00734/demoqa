// import HomePage from '../pages/HomePage';
// import FormsPage from '../pages/FormsPage';
// import ElementsPage from '../pages/ElementsPage';
// import TextBoxPage from '../pages/TextBoxPage';
// import 'cypress-mochawesome-reporter/register';
// import RadioButtonPage from '../pages/RadioButtonPage';


// const homePage = new HomePage();
// const formsPage = new FormsPage();
// const elementsPage = new ElementsPage();
// const textBoxPage = new TextBoxPage();
// const radioButtonPage = new RadioButtonPage();

// describe('DemoQA - Text Box', () => {

//   it('launches DemoQA, opens Forms > Elements > Text Box, fills and submits the form', () => {

//     // Step 1: Launch the DemoQA application.
//     homePage.visit();

//     // Step 2: Verify that the DemoQA home page is displayed.
//     homePage.verifyHomePage();

//     // Step 3: Click the Forms module.
//     homePage.clickFormsCard();

//     // Step 4: Verify that the Forms page is displayed.
//     formsPage.verifyFormsPage();

//     // Step 5: Click the Elements section.
//     formsPage.clickElements();

//     // Step 6: Click Text Box.
//     elementsPage.clickTextBox();

//     // Step 7: Verify that the Text Box page is displayed.
//     textBoxPage.verifyTextBoxPage();

//     // Step 8: Enter Full Name.
//     textBoxPage.enterFullName('Nikhil Gautam');

//     // Step 9: Enter Email.
//     textBoxPage.enterEmail('nikhilgautamsharda@gmail.com');

//     // Step 10: Enter Current Address.
//     textBoxPage.enterCurrentAddress('Noida, Uttar Pradesh');

//     // Step 11: Enter Permanent Address.
//     textBoxPage.enterPermanentAddress('Noida, Uttar Pradesh');

//     // Step 12: Click Submit.
//     textBoxPage.clickSubmit();

//     // Step 13: Verify submitted data.
//     textBoxPage.verifySubmittedFullName('Nikhil Gautam');
//     textBoxPage.verifySubmittedEmail('nishilgautamsharda@gmail.com');
//     textBoxPage.verifySubmittedCurrentAddress('Noida, Uttar Pradesh');
//     textBoxPage.verifySubmittedPermanentAddress('Noida, Uttar Pradesh');
//   });

//     // Step 14: Click Radio Button.
//     elementsPage.clickRadioButton();

//     // Step 15: Verify that the Radio Button page is displayed.
//     radioButtonPage.verifyRadioButtonPage();

//     // Step 16: Select Yes radio button.
//     const selectedOption = 'Yes';
//     radioButtonPage.selectYes();

//     // Step 17: Verify that the selected option is displayed.
//     radioButtonPage.verifySelectedOption(selectedOption);

    

// });


import HomePage from '../pages/HomePage';
import FormsPage from '../pages/FormsPage';
import ElementsPage from '../pages/ElementsPage';
import TextBoxPage from '../pages/TextBoxPage';
import RadioButtonPage from '../pages/RadioButtonPage';

const homePage = new HomePage();
const formsPage = new FormsPage();
const elementsPage = new ElementsPage();
const textBoxPage = new TextBoxPage();
const radioButtonPage = new RadioButtonPage();

describe('DemoQA - Text Box and Radio Button', () => {

  it('launches DemoQA, fills Text Box, submits form, selects Radio Button and verifies selection', () => {

    // Step 1: Launch the DemoQA application.
    homePage.visit();

    // Step 2: Verify that the DemoQA home page is displayed.
    homePage.verifyHomePage();

    // Step 3: Click the Forms module.
    homePage.clickFormsCard();

    // Step 4: Verify that the Forms page is displayed.
    formsPage.verifyFormsPage();

    // Step 5: Click the Elements section.
    formsPage.clickElements();

    // Step 6: Click Text Box.
    elementsPage.clickTextBox();

    // Step 7: Verify that the Text Box page is displayed.
    textBoxPage.verifyTextBoxPage();

    // Step 8: Enter Full Name.
    textBoxPage.enterFullName('Nikhil Gautam');

    // Step 9: Enter Email.
    textBoxPage.enterEmail('nishilgautamsharda@gmail.com');

    // Step 10: Enter Current Address.
    textBoxPage.enterCurrentAddress('Noida, Uttar Pradesh');

    // Step 11: Enter Permanent Address.
    textBoxPage.enterPermanentAddress('Noida, Uttar Pradesh');

    // Step 12: Click Submit.
    textBoxPage.clickSubmit();

    // Step 13: Verify submitted data.
    textBoxPage.verifySubmittedFullName('Nikhil Gautam');
    textBoxPage.verifySubmittedEmail('nishilgautamsharda@gmail.com');
    textBoxPage.verifySubmittedCurrentAddress('Noida, Uttar Pradesh');
    textBoxPage.verifySubmittedPermanentAddress('Noida, Uttar Pradesh');

    // Step 14: Click Radio Button.
    elementsPage.clickRadioButton();

    // Step 15: Verify that the Radio Button page is displayed.
    radioButtonPage.verifyRadioButtonPage();

    // Step 16: Select Yes radio button.
    const selectedOption = 'Yes';
    radioButtonPage.selectYes();

    // Step 17: Verify that the selected option is displayed.
    radioButtonPage.verifySelectedOption(selectedOption);

  });

});