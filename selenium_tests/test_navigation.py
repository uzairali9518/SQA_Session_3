"""Scenario 1: Open website, navigate to another page, and verify title."""

from selenium.webdriver.common.by import By

from utils import (
    BASE_URL,
    click_element,
    create_driver,
    open_url,
    page_title_contains,
    wait_for_element,
)


def test_navigation_to_form_authentication():
    """Open the home page, click Form Authentication, and verify the login page."""
    driver = create_driver()

    try:
        open_url(driver, BASE_URL)

        form_auth_link = (By.LINK_TEXT, "Form Authentication")
        click_element(driver, form_auth_link)

        wait_for_element(driver, (By.ID, "username"))

        assert "/login" in driver.current_url, (
            f"Expected URL to contain '/login', got '{driver.current_url}'"
        )
        assert page_title_contains(driver, "The Internet"), (
            f"Expected title to contain 'The Internet', got '{driver.title}'"
        )

        heading = driver.find_element(By.CSS_SELECTOR, "h2").text
        assert heading == "Login Page", f"Expected heading 'Login Page', got '{heading}'"

        print("Navigation test passed: reached Form Authentication page.")
    finally:
        driver.quit()


if __name__ == "__main__":
    test_navigation_to_form_authentication()
