
# 🧪 Web Automation Testing Project  
### Playwright & Cypress on React Portfolio

This project demonstrates automated testing of a React-based portfolio website using **Playwright** and **Cypress**. The objective is to test core user flows, UI elements, and form validation while comparing both tools practically.

---

## 🚀 Technologies Used
- React (Frontend)
- Playwright (Automation Testing)
- Cypress (Automation Testing)
- Node.js

---

## 🔹 Playwright Automation

Playwright is a powerful end-to-end testing framework that supports multiple browsers and advanced automation features.

### Features:
- Multi-browser testing (Chromium, Firefox)
- Page Object Model (POM)
- Assertions using `expect`
- HTML reporting
- Screenshots on failure
- Fast execution

### Run Playwright Tests:
```bash
npx playwright test
````

### View Report:

```bash
npx playwright show-report
```

---

## 🔹 Cypress Automation

Cypress is a beginner-friendly automation tool with a strong UI for debugging and test execution.

### Features:

* Easy setup
* beforeEach hooks
* Real-time browser execution
* Automatic screenshots and videos
* Simple syntax

### Run Cypress Tests:

```bash
npx cypress open
```

OR

```bash
npx cypress run
```

---

## 🧪 Test Scenarios

* Website load and title verification
* Navbar navigation
* Contact form (valid submission)
* Contact form (invalid input handling)
* UI elements visibility

---

## ⚖️ Playwright vs Cypress

| Feature         | Playwright                | Cypress              |
| --------------- | ------------------------- | -------------------- |
| Setup           | Moderate                  | Easy                 |
| Learning Curve  | Medium                    | Beginner-friendly    |
| Browser Support | Chromium, Firefox, WebKit | Mostly Chromium      |
| Speed           | Faster                    | Slightly slower      |
| Debugging       | Code-based                | Excellent GUI        |
| Reporting       | HTML reports              | Screenshots & videos |

---

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run React App

```bash
npm run dev
```

### 3. Run Playwright

```bash
npx playwright test
```

### 4. Run Cypress

```bash
cd Cypress_automation
npm install
npx cypress open
```


### Selenium (Python) and Robot Framework

This project demonstrates web automation testing using **Selenium (Python)** and **Robot Framework**. It includes scripted browser tests against [the-internet.herokuapp.com](https://the-internet.herokuapp.com), covering navigation, form login, and success validation with explicit waits and clear assertions.

## Tools Used

- Selenium (Python)
- Robot Framework
- ChromeDriver (managed via `webdriver-manager`)

## Project Structure

```
├── selenium_tests/
│   ├── test_login.py
│   ├── test_navigation.py
│   └── utils.py
├── robot_tests/
│   └── test_case.robot
├── requirements.txt
└── README.md
```

## Setup

Install dependencies:

```bash
pip install -r requirements.txt
```

## How to Run

### Selenium

From the project root:

```bash
python selenium_tests/test_login.py
python selenium_tests/test_navigation.py
```

### Robot Framework

```bash
robot robot_tests/test_case.robot
```

## Test Scenarios

| Test | Description |
|------|-------------|
| `test_navigation.py` | Opens the home page, clicks **Form Authentication**, and verifies the login page title and heading. |
| `test_login.py` | Logs in with valid credentials and verifies the success message and `/secure` URL. |
| `test_case.robot` | Robot Framework keyword-driven login test with the same validations. |

## Reflection Note

Robot Framework felt easier for a straightforward login flow because built-in keywords like `Open Browser`, `Input Text`, and `Page Should Contain` read like plain English and require less boilerplate. Selenium with Python offered more control for reusable helpers, explicit waits, and structured assertions in `utils.py`, but needed more setup code. Challenges included matching stable locators (ID and CSS over long XPath), handling timing with explicit waits instead of fixed sleeps, and ensuring ChromeDriver compatibility via `webdriver-manager`. SQA engineers reviewing AI-generated scripts should run them locally, inspect selectors against the live DOM, confirm assertions match real expected behavior, add edge-case and negative tests, and treat generated code as a draft that still needs human review, maintenance, and integration into CI.




