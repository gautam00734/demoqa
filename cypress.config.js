// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://demoqa.com',
//     defaultCommandTimeout: 10000,
//     setupNodeEvents(on, config) {
//       // Node event listeners can be added here when needed.
//     },
//   },
// });

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'DemoQA Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveJson: true
  },

  e2e: {
    baseUrl: 'https://demoqa.com',
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    }
  }
});