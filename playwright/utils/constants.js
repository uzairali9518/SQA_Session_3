/**
 * Shared constants for Playwright tests.
 * Keep in sync with src/utils/data.js and index.html.
 */

export const PAGE_TITLE = 'Uzair Ali | Software Engineer Portfolio';

export const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

export const SECTIONS = {
  home: { id: 'home', heading: 'Uzair Ali' },
  about: { id: 'about', heading: 'Who I Am' },
  projects: { id: 'projects', heading: 'Featured Projects' },
  contact: { id: 'contact', heading: 'Contact Me' },
};

export const VALID_CONTACT_FORM = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  subject: 'Project Inquiry',
  message: 'I would like to discuss a web development project with you.',
};

export const INVALID_EMAIL = 'not-a-valid-email';

export const SUCCESS_MESSAGE = "Message sent successfully! I'll get back to you soon.";
export const ERROR_MESSAGE = 'Failed to send. Please email me directly at';
