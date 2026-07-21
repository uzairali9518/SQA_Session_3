import { expect } from '@playwright/test';
import { SUCCESS_MESSAGE, ERROR_MESSAGE } from '../utils/constants.js';

/**
 * Page Object for the Contact section and form.
 */
export class ContactPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Section locators
    this.section = page.locator('#contact');
    this.heading = page.getByRole('heading', { name: 'Contact Me' });

    // Form field locators
    this.nameInput = page.locator('#name');
    this.emailInput = page.locator('#email');
    this.subjectInput = page.locator('#subject');
    this.messageInput = page.locator('#message');
    this.submitButton = page.getByRole('button', { name: 'Send Message' });

    // Feedback messages
    this.successMessage = page.getByText(SUCCESS_MESSAGE);
    this.errorMessage = page.getByText(new RegExp(ERROR_MESSAGE));
  }

  /** Scroll the contact section into view. */
  async scrollIntoView() {
    await this.section.scrollIntoViewIfNeeded();
    await this.heading.waitFor({ state: 'visible' });
  }

  /**
   * Fill the contact form with the provided data.
   * @param {{ name?: string, email?: string, subject?: string, message?: string }} data
   */
  async fillForm(data) {
    if (data.name !== undefined) await this.nameInput.fill(data.name);
    if (data.email !== undefined) await this.emailInput.fill(data.email);
    if (data.subject !== undefined) await this.subjectInput.fill(data.subject);
    if (data.message !== undefined) await this.messageInput.fill(data.message);
  }

  /** Submit the contact form. */
  async submit() {
    await this.submitButton.click();
  }

  /** Fill and submit the form in one step. */
  async fillAndSubmit(data) {
    await this.fillForm(data);
    await this.submit();
  }

  /** Verify the success message appears after a valid submission. */
  async verifySuccessMessage() {
    await expect(this.successMessage).toBeVisible({ timeout: 10000 });
  }

  /** Verify the error message appears after a failed submission. */
  async verifyErrorMessage() {
    await expect(this.errorMessage).toBeVisible({ timeout: 10000 });
  }

  /**
   * Verify the email field fails HTML5 validation for an invalid address.
   * The form uses noValidate, so we assert constraint validity on the input.
   */
  async verifyEmailIsInvalid() {
    const isValid = await this.emailInput.evaluate((el) => el.checkValidity());
    expect(isValid).toBe(false);
  }
}
