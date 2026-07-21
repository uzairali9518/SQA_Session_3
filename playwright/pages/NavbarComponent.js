/**
 * Page Object for the site navigation bar (desktop & mobile).
 */
export class NavbarComponent {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;

    // Locators
    this.header = page.locator('header[role="banner"]');
    this.nav = page.locator('nav[aria-label="Main navigation"]');
    this.logo = this.nav.getByRole('link', { name: 'Uzair Ali - Home' });
    this.resumeButton = this.nav.getByRole('link', { name: 'Download Resume' });
    this.mobileMenuButton = this.nav.locator('button[aria-label="Open menu"], button[aria-label="Close menu"]');
  }

  /**
   * Get a desktop navigation link by visible label.
   * @param {string} linkName - e.g. "About", "Projects", "Contact"
   */
  getNavLink(linkName) {
    return this.nav.getByRole('link', { name: linkName, exact: true });
  }

  /**
   * Click a navigation link and wait for smooth scroll to finish.
   * @param {string} linkName
   */
  async clickNavLink(linkName) {
    const link = this.getNavLink(linkName);
    await link.click();
    // Allow smooth-scroll animation to settle
    await this.page.waitForTimeout(800);
  }

  /** Navigate to the home/hero section via the logo. */
  async clickLogo() {
    await this.logo.click();
    await this.page.waitForTimeout(800);
  }

  /** Open the mobile navigation menu (visible on smaller viewports). */
  async openMobileMenu() {
    await this.mobileMenuButton.click();
  }

  /** Verify the navbar is visible on the page. */
  async isVisible() {
    await this.header.waitFor({ state: 'visible' });
  }
}
