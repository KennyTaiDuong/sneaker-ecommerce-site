import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";
import { config } from "dotenv"

config()

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
    auth0_username: process.env.AUTH0_USERNAME,
    auth0_password: process.env.AUTH0_PASSWORD,
    auth0_domain: process.env.AUTH0_DOMAIN,
    auth0_audience: process.env.AUTH0_AUDIENCE,
    auth0_client_id: process.env.AUTH0_CLIENTID,
    auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);

      return config;
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
    chromeWebSecurity: false,
  },
});
