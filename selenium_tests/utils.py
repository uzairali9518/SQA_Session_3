"""Reusable helpers for Selenium automation tests."""

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
from webdriver_manager.chrome import ChromeDriverManager

DEFAULT_TIMEOUT = 10

BASE_URL = "https://the-internet.herokuapp.com"
LOGIN_URL = f"{BASE_URL}/login"
USERNAME = "tomsmith"
PASSWORD = "SuperSecretPassword!"


def create_driver():
    """Launch Chrome with an automatically managed driver."""
    options = webdriver.ChromeOptions()
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=options)
    driver.maximize_window()
    return driver


def wait_for_element(driver, locator, timeout=DEFAULT_TIMEOUT):
    """Wait until an element is visible and return it."""
    by, value = locator
    return WebDriverWait(driver, timeout).until(
        EC.visibility_of_element_located((by, value))
    )


def wait_for_clickable(driver, locator, timeout=DEFAULT_TIMEOUT):
    """Wait until an element is clickable and return it."""
    by, value = locator
    return WebDriverWait(driver, timeout).until(
        EC.element_to_be_clickable((by, value))
    )


def open_url(driver, url):
    """Navigate to the given URL."""
    driver.get(url)


def click_element(driver, locator, timeout=DEFAULT_TIMEOUT):
    """Click an element after waiting for it to be clickable."""
    element = wait_for_clickable(driver, locator, timeout)
    element.click()


def input_text(driver, locator, text, timeout=DEFAULT_TIMEOUT):
    """Clear a field and enter text."""
    element = wait_for_element(driver, locator, timeout)
    element.clear()
    element.send_keys(text)


def get_element_text(driver, locator, timeout=DEFAULT_TIMEOUT):
    """Return visible text from an element."""
    element = wait_for_element(driver, locator, timeout)
    return element.text


def wait_for_url_contains(driver, fragment, timeout=DEFAULT_TIMEOUT):
    """Wait until the current URL contains the given fragment."""
    WebDriverWait(driver, timeout).until(EC.url_contains(fragment))


def page_title_contains(driver, expected_text):
    """Check whether the page title contains expected text."""
    return expected_text in driver.title


def login(driver, username=USERNAME, password=PASSWORD):
    """Perform login on the-internet.herokuapp.com login page."""
    open_url(driver, LOGIN_URL)
    input_text(driver, (By.ID, "username"), username)
    input_text(driver, (By.ID, "password"), password)
    click_element(driver, (By.CSS_SELECTOR, "button[type='submit']"))
