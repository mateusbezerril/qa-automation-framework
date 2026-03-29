const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://reqres.in',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'reports/cypress',
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {},
  },
})
