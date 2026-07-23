"""Mobile automation: open Chrome, search text, and verify results."""

import sys
from pathlib import Path

from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

APP_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(APP_ROOT))

from utils.driver_setup import create_driver, get_wait  # noqa: E402

SEARCH_TEXT = "Appium Test"
GOOGLE_URL = "https://www.google.com"
SCREENSHOT_DIR = APP_ROOT / "docs" / "setup_attempts"


def _save_failure_screenshot(driver):
    """Save a screenshot when the driver session is active."""
    SCREENSHOT_DIR.mkdir(parents=True, exist_ok=True)
    screenshot_path = SCREENSHOT_DIR / "test_failure_screenshot.png"
    driver.save_screenshot(str(screenshot_path))
    print(f"Saved failure screenshot to {screenshot_path}")


def test_chrome_search():
    """Open Chrome, enter search text, submit, and verify the results page."""
    driver = None

    try:
        driver = create_driver()
        wait = get_wait(driver)

        driver.get(GOOGLE_URL)

        search_box = wait.until(
            EC.element_to_be_clickable((By.NAME, "q"))
        )
        search_box.click()
        search_box.send_keys(SEARCH_TEXT)
        search_box.submit()

        wait.until(EC.presence_of_element_located((By.ID, "search")))

        page_source = driver.page_source
        assert SEARCH_TEXT in page_source or "Appium" in page_source, (
            "Expected search results to contain the submitted query text."
        )

        assert driver.current_url, "Expected a loaded results page URL."
        print("Mobile test passed: search submitted and results verified.")
    except Exception:
        if driver is not None:
            try:
                _save_failure_screenshot(driver)
            except Exception as screenshot_error:
                print(f"Could not save screenshot: {screenshot_error}")
        raise
    finally:
        if driver is not None:
            driver.quit()


if __name__ == "__main__":
    test_chrome_search()
