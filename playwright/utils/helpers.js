/**
 * Reusable test utilities for API mocking and common actions.
 */

const EMAILJS_API_PATTERN = '**/api.emailjs.com/**';

/**
 * Mock the EmailJS API so contact form tests do not send real emails.
 * @param {import('@playwright/test').Page} page
 * @param {{ success?: boolean }} options
 */
export async function mockEmailJsApi(page, { success = true } = {}) {
  await page.route(EMAILJS_API_PATTERN, async (route) => {
    if (success) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ text: 'OK' }),
      });
      return;
    }

    await route.fulfill({
      status: 400,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Invalid request' }),
    });
  });
}

/**
 * Wait until a section is scrolled into the viewport after navbar navigation.
 * @param {import('@playwright/test').Page} page
 * @param {string} sectionId - e.g. "about", "projects"
 */
export async function waitForSectionInView(page, sectionId) {
  const section = page.locator(`#${sectionId}`);
  await section.waitFor({ state: 'visible' });
  await section.scrollIntoViewIfNeeded();
}
