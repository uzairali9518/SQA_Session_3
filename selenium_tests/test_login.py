"""Scenario 2: Form submission and validation on the login page."""

from selenium.webdriver.common.by import By

from utils import (
    create_driver,
    get_element_text,
    login,
    wait_for_url_contains,
)


def test_login_success():
    """Log in with valid credentials and verify success message and URL."""
    driver = create_driver()

    try:
        login(driver)

        wait_for_url_contains(driver, "/secure")

        assert "/secure" in driver.current_url, (
            f"Expected URL to contain '/secure', got '{driver.current_url}'"
        )

        flash_message = get_element_text(driver, (By.CSS_SELECTOR, "#flash"))
        assert "You logged into a secure area!" in flash_message, (
            f"Expected success message, got '{flash_message}'"
        )

        print("Login test passed: success message displayed and URL validated.")
    finally:
        driver.quit()


if __name__ == "__main__":
    test_login_success()
