// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for the Uzair Ali portfolio site.
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 2,
  timeout: 60 * 1000,

  /* HTML report + console output */
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  use: {
    baseURL: 'http://localhost:5173',
    navigationTimeout: 60 * 1000,
    actionTimeout: 15 * 1000,

    /* Capture screenshots only when a test fails */
    screenshot: 'only-on-failure',

    /* Record video and retain it only for failed tests */
    video: 'retain-on-failure',

    /* Collect trace on first retry for easier debugging */
    trace: 'on-first-retry',
  },

  /* Run tests on Chromium and Firefox */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],

  /* Start the Vite dev server before running tests */
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000,
  },
});
