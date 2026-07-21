import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.js';
import { ContactPage } from '../pages/ContactPage.js';
import { VALID_CONTACT_FORM, INVALID_EMAIL } from '../utils/constants.js';
import { mockEmailJsApi } from '../utils/helpers.js';

test.describe('Portfolio Website', () => {
  let homePage;
  let contactPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    contactPage = new ContactPage(page);
    await homePage.goto();
  });

  // Test 1: Website Load & Title Check
  test('should load homepage and display correct title', async () => {
    await homePage.verifyTitle();
    await expect(homePage.heroSection).toBeVisible();
    await expect(homePage.heroHeading).toContainText('Uzair Ali');
  });

  // Test 2: Navbar Navigation
  test('should navigate to sections via navbar links', async ({ page }) => {
    const { navbar } = homePage;

    await navbar.clickNavLink('About');
    await expect(homePage.aboutSection).toBeInViewport();
    await expect(homePage.aboutHeading).toBeVisible();

    await navbar.clickNavLink('Projects');
    await expect(homePage.projectsSection).toBeInViewport();
    await expect(homePage.projectsHeading).toBeVisible();

    await navbar.clickNavLink('Contact');
    await expect(homePage.contactSection).toBeInViewport();
    await expect(homePage.contactHeading).toBeVisible();

    await navbar.clickNavLink('Home');
    await expect(homePage.heroSection).toBeInViewport();
  });

  // Test 3: Contact Form Valid Submission
  test('should submit contact form with valid data and show success message', async ({ page }) => {
    await mockEmailJsApi(page, { success: true });

    await homePage.navbar.clickNavLink('Contact');
    await contactPage.fillAndSubmit(VALID_CONTACT_FORM);
    await contactPage.verifySuccessMessage();
  });

  // Test 4: Contact Form Invalid Input
  test('should show error when submitting with invalid email', async ({ page }) => {
    await mockEmailJsApi(page, { success: false });

    await homePage.navbar.clickNavLink('Contact');
    await contactPage.fillForm({
      ...VALID_CONTACT_FORM,
      email: INVALID_EMAIL,
    });

    // Email input should fail HTML5 validation
    await contactPage.verifyEmailIsInvalid();

    // Form still submits (noValidate) — verify the error feedback is shown
    await contactPage.submit();
    await contactPage.verifyErrorMessage();
  });

  // Test 5: UI Elements Visibility
  test('should display important UI elements on the homepage', async () => {
    await homePage.verifyKeyElementsVisible();
    await expect(homePage.skillsSection).toBeAttached();
    await expect(homePage.experienceSection).toBeAttached();
  });
});
