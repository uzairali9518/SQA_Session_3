
# 🧪 Web Automation Testing Project  
# Playwright & Cypress on React Portfolio

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


# Selenium (Python) and Robot Framework

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


# 📱 Appium Mobile Automation Project

## 🚀 Project Overview
This project demonstrates a basic mobile automation testing setup using **Appium with Python**. It covers launching an Android emulator or real device, interacting with a mobile application, and validating user actions through automated test scripts.

---

## 🛠️ Tools & Technologies
- Appium  
- Python  
- Selenium WebDriver  
- Android Studio (Emulator)  
- Node.js  

---

## 📁 Project Structure

```

appium/
│── tests/
│   ├── test_mobile.py
│
│── utils/
│   ├── driver_setup.py
│
│── requirements.txt
│── README.md

````

---

## ✅ Features
- Appium environment setup  
- Android emulator/device integration  
- Launch mobile application  
- Tap on elements  
- Enter text input  
- Validate result screen  

---

## 📲 Test Scenario

### Mobile Automation Flow:
1. Launch Android emulator/device  
2. Open mobile application (Chrome browser)  
3. Tap on search/input field  
4. Enter text: **"Appium Test"**  
5. Submit/search  
6. Verify result screen is displayed  

---

## ⚙️ Setup Instructions

### 1️⃣ Install Node.js
Download from: https://nodejs.org  

### 2️⃣ Install Appium
```bash
npm install -g appium
````

### 3️⃣ Start Appium Server

```bash
appium
```

### 4️⃣ Install Python Dependencies

```bash
pip install -r requirements.txt
```

### 5️⃣ Setup Android Emulator

* Install Android Studio
* Create Virtual Device (AVD)
* Start Emulator

OR connect a real Android device (USB Debugging ON)

---

## ▶️ Run Test

```bash
python appium/tests/test_mobile.py
```

---

## 🎯 Expected Output

* Emulator/device launches
* App opens successfully
* Text is entered
* Result screen appears
* Test passes

---

## ⚠️ Issues & Challenges

Common issues you may face:

* Appium server not starting
* Device/emulator not detected
* Incorrect desired capabilities
* Missing environment variables (ANDROID_HOME, JAVA_HOME)

If setup fails, include screenshots of:

* Errors
* Installation steps
* Script execution

---

## 📚 Learning Outcome

* Understanding Appium setup
* Writing mobile automation scripts
* Performing user interactions (tap, input)
* Validating mobile UI behavior

---

## 🧠 Conclusion

This project provides a beginner-friendly introduction to mobile automation testing using Appium and helps build strong foundations for QA engineers.

---






