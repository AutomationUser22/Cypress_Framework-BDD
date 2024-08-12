import {defineConfig} from "cypress";
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  projectId: "wzmpgs",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  retries: {
    runMode: 1
  },
  e2e: {
    specPattern: ['cypress/e2e', "**/*.feature"],
    baseUrl: 'https://rahulshettyacademy.com',
    setupNodeEvents(on) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    downloadsFolder : 'cypress/downloads'
  },
});