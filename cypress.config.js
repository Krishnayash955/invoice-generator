// cypress.config.js
module.exports = {
    e2e: {
      // This tells Cypress where your test specs are located
      specPattern: 'cypress/integration/**/*.{js,ts,jsx,tsx}', // Adjust path if needed
      baseUrl: 'http://localhost:3000',  // Update baseUrl if needed
    },
  };