const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "e693bi",
  chromeWebSecurity: false,

  e2e: {
    supportFile: 'C:/Users/zivile/LRT-testai/cypress/support/e2e.js',
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  component: {
    devServer: {
      framework: "vue-cli",
      bundler: "webpack",
    },
  },
});

