"""Appium driver configuration for Android mobile tests."""

from appium import webdriver
from appium.options.android import UiAutomator2Options
from selenium.webdriver.support.ui import WebDriverWait

# Appium 1.x/2.x use /wd/hub; Appium 3.x uses the base URL only.
APPIUM_SERVER = "http://localhost:4723/wd/hub"
APPIUM_SERVER_V3 = "http://localhost:4723"
DEFAULT_TIMEOUT = 15

ANDROID_CAPABILITIES = {
    "platformName": "Android",
    "deviceName": "emulator-5554",
    "automationName": "UiAutomator2",
    "browserName": "Chrome",
    "chromedriverAutodownload": True,
    "newCommandTimeout": 120,
}


def build_options():
    """Build UiAutomator2 options from the project capability set."""
    options = UiAutomator2Options()
    for key, value in ANDROID_CAPABILITIES.items():
        options.set_capability(key, value)
    return options


def create_driver(appium_server=None):
    """Create and return a connected Appium WebDriver session."""
    options = build_options()
    servers = [appium_server] if appium_server else [APPIUM_SERVER, APPIUM_SERVER_V3]

    last_error = None
    for server in servers:
        try:
            driver = webdriver.Remote(server, options=options)
            driver.implicitly_wait(DEFAULT_TIMEOUT)
            return driver
        except Exception as exc:
            last_error = exc

    raise RuntimeError(
        "Could not create an Appium session. Start Appium (`appium`) and "
        "connect an Android emulator or device (`adb devices`)."
    ) from last_error


def get_wait(driver, timeout=DEFAULT_TIMEOUT):
    """Return an explicit wait helper for the active driver."""
    return WebDriverWait(driver, timeout)
