# Pump Fitness Gym Website

Link To Website: https://tylerrtdev.github.io/code-institute-course/

### Overview

The Pump Fitness Gym website is designed to create a thriving online presence for Pump Fitness Gym, offering information about gym memberships, classes, and services as well as business location. It provides an intuitive and user-friendly interface for current and potential members to explore membership options, contact the gym, and learn more about the facilities and community.

### Purpose

The primary purpose of this website is to:

- Inform visitors about the various services and membership options available at Pump Fitness Gym.
- Facilitate online membership registration and inquiries.
- Enhance the gym's visibility and engagement through social media links.
- Provide easy access to contact information and location details.

### Value to Users

The website will offers significant value to users - both visitors and members by:

- Providing comprehensive information about gym services and membership plans.
- Allowing users to conveniently register for memberships online.
- Enabling users to easily contact the gym and find its location.
- Connecting users with the gym's social media profiles for updates and community engagement.

### Deployment Procedure

All steps below can be performed using <u>***Visual Studio Code***</u>.

To deploy the Pump Fitness Gym website, follow these detailed steps:

### 1. Obtain the Project Files:

You can obtain the project files either by cloning the repository or downloading them directly from GitHub.

#### **Option A: Clone the Repository:**

Cloning the repository allows you to have a local copy of the website's codebase, which you can easily update if the original repository changes.

1. **Open a terminal** on your local machine.
2. **Run the following command** to clone the repository:

```cmd
git clone https://github.com/TylerRTDev/code-institute-course.git 
```
![alt text](/Images/terminal-ss.png)

This command will download the repository into a folder named `code-institute-course`.

3. **Navigate to the project directory:**

```cmd
cd code-institute-course
```
![alt text](/Images/terminal-directory.png)

This places you inside the project directory where all the website files are located.

### Set Up the Environment:

Ensure you have a web server environment such as Apache or Nginx. For local testing, you can use a simple server with Python:

```cmd
python3 -m http.server 3000
```
![alt text](/Images/python-server.png)

This will start the python server.

### Configure Domain:
1. **Open a new terminal and type the following:**
```cmd
ipconfig
```
![alt text](/Images/ipaddress.png)

This will give you the ability to see what your ip address is.

2. **Copy the IP Address and combine it to the server address:**

Domain URL: `https://[your-ip-address-here]:3000/`

![alt text](/Images/domain-url.png)

When you use `127.0.0.1` in a web browser, you're connecting to a server running on your own computer.

Open your web browser and navigate to your domain to verify that the website is working as expected.

### Test the Deployment:

If you have set up the server correctly you should also be able to navigate to the site via the following link: ***Domain URL example***: **```http://127.0.0.1:3000/```**

You can also use your own IP Address as an alternative.

## Testing

### Table of Contents
1. [Objective](#objective)
2. [Rationale](#rationale)
3. [Prerequisites](#prerequisites)
4. [Test Cases](#test-cases)
5. [Test Execution](#test-execution)
   - [TC-001: Homepage](#tc-001-homepage)
   - [TC-002: Navigation Bar](#tc-002-navigation-bar)
   - [TC-003: Forms](#tc-003-forms)
   - [TC-004: Responsiveness](#tc-004-responsiveness)
   - [TC-005: Browser Compatibility](#tc-005-browser-compatibility)
   - [TC-006: Accessibility](#tc-006-accessibility)
6. [Test Execution Results](#test-execution-results)
7. [Test Analysis](#test-analysis)
8. [Test Summary](#test-summary)

### Objective

Verify that specific elements of the Pump Fitness Gym website function as intended. This includes ensuring that key components such as the homepage, navigation bar, forms, responsiveness, browser compatibility, and accessibility work correctly to provide a seamless user experience. The goal is to identify and address any issues that could disrupt the user's interaction with the website.

### Rationale

maintain high standards of usability and functionality across the Pump Fitness Gym website. Ensuring that all elements work consistently and effectively allows the website to offer a positive and accessible experience to all users, regardless of the device or browser they use. Additionally, meeting accessibility standards is crucial for inclusivity, enabling users with disabilities to interact with the site effectively.

### Prerequisites
Before testing, ensure you have the following:
- Access to the application.
- Access to multiple browsers (Chrome, Firefox, Edge).
- Devices for testing responsiveness (Desktop, Tablet, Mobile).

### Test Cases

| Test Case ID | Test Case Name         | Description                                                                                  |
|--------------|------------------------|----------------------------------------------------------------------------------------------|
| TC-001       | Homepage               | Verify that the homepage loads correctly and all elements are displayed as expected.         |
| TC-002       | Navigation Bar         | Ensure the navigation bar works correctly on all pages and is responsive on smaller screens. |
| TC-003       | Forms                  | Verify that all forms function correctly, handle user input as expected, and provide proper validation feedback. |
| TC-004       | Responsiveness         | Ensure the website is responsive and displays correctly on different screen sizes and devices.|
| TC-005       | Browser Compatibility  | Ensure the website functions correctly across different browsers.                            |
| TC-006       | Accessibility          | Ensure the website meets accessibility standards, including keyboard navigation and screen reader support. |


The above test cases have been designed to evaluate the key functional and usability aspects of the Pump Fitness Gym website. They ensure that components like the homepage, navigation bar, forms, responsiveness, browser compatibility, and accessibility work as expected. The goal is to identify any issues that could hinder the user experience, ensuring the website is user-friendly, accessible, and consistent across different platforms and devices.

### Test Execution

#### TC-001: Homepage
**Objective:** Verify that the homepage loads correctly and all elements are displayed as expected.

**Steps:**
1. Navigate to the homepage.
2. Verify that the page title is correct.
3. Check that the logo is displayed correctly.
4. Ensure all links in the navigation bar are working.
5. Verify that images are loaded and displayed correctly.
6. Check that the footer contains the correct information and links.

**Expected Results:**
- All elements should be correctly displayed.
- Links should navigate to the correct pages.
- No broken images or links.

#### TC-002: Navigation Bar
**Objective:** Ensure the navigation bar works correctly on all pages.

**Steps:**
1. Verify the navigation bar is present on all pages.
2. Check that all navigation links redirect to the correct page.
3. Ensure the navigation bar is responsive (collapses/expands correctly on smaller screens).

**Expected Results:**
- Navigation bar should be consistent across all pages.
- Links should function correctly.
- Navigation should be responsive and user-friendly.

#### TC-003: Forms
**Objective:** Verify that all forms function correctly and handle user input as expected.

**Steps:**
1. Navigate to a page with a form (e.g., contact form, sign-up form).
2. Fill out the form with valid data and submit.
3. Check for success messages or redirection.
4. Submit the form with invalid data and check for error messages.
5. Test form validation for each field.

**Expected Results:**
- Forms should display error messages for invalid data.

#### TC-004. Responsiveness
**Objective:** Ensure the application is responsive and displays correctly on different screen sizes.

**Steps:**
1. Open the application on a desktop, tablet, and mobile device.
2. Verify that the layout adjusts correctly on each device.
3. Check that text, images, and other elements are readable and accessible.

**Expected Results:**
- The application should be fully functional and visually appealing on all devices.
- No elements should be cut off or misaligned.

#### TC-005: Browser Compatibility
**Objective:** Ensure the application works correctly across different browsers.

**Steps:**
1. Open the application in Chrome, Firefox, Safari, and Edge.
2. Verify that all functionality works as expected in each browser.
3. Check for any visual discrepancies or functionality issues.

**Expected Results:**
- The application should function consistently across all supported browsers.
- No major visual or functional issues should be present.

#### TC-006: Accessibility
**Objective:** Ensure the application meets accessibility standards.

**Steps:**
1. Verify that all images have alt text.
2. Check that the application can be navigated using the keyboard.
3. Use a screen reader to ensure the application is accessible to visually impaired users.
4. Check for color contrast issues.

**Expected Results:**
- The application should be usable by people with disabilities.
- All accessibility features should work correctly.

### Test Execution Results

| Test Case ID | Results              |
|--------------|----------------------|
| TC-001       | ✅ Pass              |
| TC-002       | ✅ Pass              |
| TC-003       | ⚠️ Partial Success   |
| TC-004       | ✅ Pass              |
| TC-005       | ✅ Pass              |
| TC-006       | ⚠️ Partial Success   |


**Execution Summary:**
The test execution results indicate that most key components of the Pump Fitness Gym website are functioning as expected, with full success in areas such as the homepage, navigation bar, responsiveness, and browser compatibility. However, partial success was observed in the forms and accessibility, indicating that while some aspects are functioning correctly, there are areas requiring further attention and improvement.

### Test Analysis

#### TC-003: Forms (Partial Success ⚠️)

**Observations:**

- Form validation works as expected, displaying errors where necessary (e.g., invalid email formats, missing required fields).
- Form submission could not be tested successfully due to the absence of a backend or landing page to handle submissions.

**Conclusion:** Validation is functional, but full functionality cannot be confirmed without backend integration. This test is marked as a partial success.

#### TC-006: Accessibility (Partial Success ⚠️)

**Observations:** 

- Keyboard navigation works correctly.
- All images have appropriate alt text.
- Button color contrast is satisfactory.
- Some ARIA labels are missing, which could affect the accessibility experience for users relying on screen readers.

**Conclusion:** While most accessibility features are implemented correctly, the absence of ARIA labels in certain areas leads to a partial success rating. Improvements are needed to fully meet accessibility standards.

### Test Conclusion

Testing has shown that the Pump Fitness Gym website performs well in most areas, but there are some critical areas for improvement, particularly in accessibility (missing ARIA labels) and form submission (which requires backend integration for full functionality). Addressing these issues will enhance the overall user experience.

### W3C Code Validation

<details>
<summary>HTML</summary>


</details>
<br>
<details>
<summary>CSS</summary>


</details>

## External References

- Google Fonts
    * https://fonts.google.com/icons
- Code Institute Form Dump
- https://www.w3schools.com/css/
    * https://www.w3schools.com/css/css3_transitions.asp
    * https://www.w3schools.com/cssref/tryit.php?filename=trycss_anim_background-size
    * https://www.w3schools.com/cssref/tryit.php?filename=trycss3_background-size
    * https://www.w3schools.com/cssref/css3_pr_background-size.php
    * https://www.w3schools.com/css/default.asp#gsc.tab=0
    * https://www.w3schools.com/css/css_form.asp
    * https://www.w3schools.com/css/css_navbar.asp
    * https://www.w3schools.com/css/css_website_layout.asp
    * https://www.w3schools.com/css/css_templates.asp
    * https://www.w3schools.com/cssref/pr_class_position.php
    * https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_animate1
    * https://www.w3schools.com/css/css3_buttons.asp
    * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapse_sidebar
    * https://www.w3schools.com/cssref/pr_text_letter-spacing.php
- Course videos and personal notes
- https://stackoverflow.com/questions/15918251/how-to-move-div-vertically-down-using-css
- Google Maps Embed API: Google Maps Embed API - Used for embedding the location map.
- https://sites.google.com/view/how-to-with-new-sites/embeds/embed-with-iframes
- GYM Websites for inspiration.
    * https://www.hussle.com/
    * https://gorillabrazilianjiujitsu.com/
    * https://www.gymonlondon.com/
    * https://www.fitnessfirst.co.uk/
    * https://www.gymonlondon.com/
    * https://www.virginactive.co.uk/clubs/aldersgate/memberships/
    * https://www.gymbox.com/
    * https://www.thegymgroup.com/
- https://stackoverflow.com/questions/41468951/images-not-displaying-in-github-pages
- https://www.c-sharpcorner.com/article/creating-a-simple-login-page-using-html-and-css/
- https://www.shecodes.io/athena/36133-how-to-make-an-icon-smaller-in-css
- https://forum.freecodecamp.org/t/how-to-keep-footer-at-bottom-of-the-page/651022
- YouTube Videos: Videos that contained steps to build features I wanted to 
    * https://www.youtube.com/watch?v=8MgpE2DTTKA&ab
    * https://codepen.io/bradtraversy/pen/eYdMqvx?editors=1100
    * https://www.youtube.com/watch?v=JywjlMIVzH8&
    * https://www.youtube.com/watch?v=znqUwx0b0HI&ab
- https://www.geeksforgeeks.org/how-to-put-an-input-element-on-the-same-line-as-its-label/
- https://www.pexels.com/
- https://elements.envato.com/
- https://www.flaticon.com/
- https://developer.mozilla.org/en-US/docs/Web/CSS/container
