import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: './tests',
  timeout: 120 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  webServer: {
    command: "yarn start:test",
    url: "http://localhost:8080",
    timeout: 150 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome']},
    }  
  ]
});