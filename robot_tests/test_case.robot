*** Settings ***
Library    SeleniumLibrary
Library    BuiltIn

*** Variables ***
${BASE_URL}       https://the-internet.herokuapp.com/login
${USERNAME}       tomsmith
${PASSWORD}       SuperSecretPassword!
${SUCCESS_MSG}    You logged into a secure area!

*** Test Cases ***
Login Test
    [Documentation]    Log in with valid credentials and verify success.
    Open Browser    ${BASE_URL}    chrome
    Maximize Browser Window
    Input Text    id:username    ${USERNAME}
    Input Text    id:password    ${PASSWORD}
    Click Button    css:button[type='submit']
    Location Should Contain    /secure
    Page Should Contain    ${SUCCESS_MSG}
    ${title}=    Get Title
    Should Contain    ${title}    The Internet
    Close Browser
