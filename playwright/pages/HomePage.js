import { expect } from '@playwright/test';
import { NavbarComponent } from './NavbarComponent.js';
import { PAGE_TITLE, SECTIONS } from '../utils/constants.js';

/**
 * Page Object for the portfolio homepage (single-page application).
 */
export class HomePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.navbar = new NavbarComponent(page);

    // Section locators
    this.heroSection = page.locator('#home');
    this.aboutSection = page.locator('#about');
    this.skillsSection = page.locator('#skills');
    this.projectsSection = page.locator('#projects');
    this.experienceSection = page.locator('#experience');
    this.contactSection = page.locator('#contact');

    // Hero UI elements
    this.heroHeading = page.locator('#home h1');
    this.downloadResumeButton = page.getByRole('link', { name: 'Download Resume' }).first();
    this.viewProjectsButton = page.getByRole('button', { name: 'View Projects' });
    this.contactMeButton = page.getByRole('button', { name: 'Contact Me' });

    // Section headings
    this.aboutHeading = page.getByRole('heading', { name: SECTIONS.about.heading });
    this.projectsHeading = page.getByRole('heading', { name: SECTIONS.projects.heading });
    this.contactHeading = page.getByRole('heading', { name: SECTIONS.contact.heading });
  }

  /** Open the homepage. */
  async goto() {
    await this.page.goto('/', { waitUntil: 'domcontentloaded' });
    await this.heroSection.waitFor({ state: 'visible' });
  }

  /** Assert the document title matches the expected portfolio title. */
  async verifyTitle() {
    await expect(this.page).toHaveTitle(PAGE_TITLE);
  }

  /**
   * Verify a section is visible and its main heading is on screen.
   * @param {'home' | 'about' | 'projects' | 'contact'} sectionKey
   */
  async verifySectionVisible(sectionKey) {
    const sectionMap = {
      home: { section: this.heroSection, heading: this.heroHeading },
      about: { section: this.aboutSection, heading: this.aboutHeading },
      projects: { section: this.projectsSection, heading: this.projectsHeading },
      contact: { section: this.contactSection, heading: this.contactHeading },
    };

    const { section, heading } = sectionMap[sectionKey];
    await expect(section).toBeVisible();
    await expect(heading).toBeVisible();
  }

  /** Verify key interactive elements and section headings are visible. */
  async verifyKeyElementsVisible() {
    await this.navbar.isVisible();
    await expect(this.heroSection).toBeVisible();
    await expect(this.heroHeading).toBeVisible();
    await expect(this.downloadResumeButton).toBeVisible();
    await expect(this.viewProjectsButton).toBeVisible();
    await expect(this.contactMeButton).toBeVisible();
    await expect(this.aboutHeading).toBeVisible();
    await expect(this.projectsHeading).toBeVisible();
    await expect(this.contactHeading).toBeVisible();
  }
}
