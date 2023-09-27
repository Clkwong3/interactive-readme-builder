# Book-Binder

![License](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

The project is a web-based social platform designed to connect individuals who share a common passion for books and reading. It offers a range of features and functionality to facilitate interactions, discussions, and content sharing related to books. Users can create accounts, log in, and engage with various aspects of the platform.

## Table of Contents

- [Installation](#installation)
- [Images](#images)
- [Usage](#usage)
- [Testing](#testing)
- [Links](#links)
- [Credits](#credits)
- [Report Issue](#report-issue)
- [License](#license)

## Installation

To use this web application, users need to have several dependencies, packages, and technologies installed and available.

Here's a list of what users need:

1. **Internet Connection:** Users need an active internet connection to access the application if it's hosted on a remote server.

2. **Web Browser:** Users need a web browser to access and interact with the web application.

3. **Image Processing Software:** Users may need image processing software to prepare and upload images when creating or editing book-related content (e.g., book covers).

4. **Dependencies:**

   - Node.js
   - npm (Node Package Manager)
   - MySQL Database
   - Sequelize
   - Express.js
   - Multer
   - bcrypt
   - dotenv
   - Handlebars.js

To install project-specific dependencies, follow these steps:

1. Navigate to the project directory using your terminal or command prompt.

2. Run the following command to install the required dependencies specified in the package.json file:

   ```sh
   npm install
   ```

Once the dependencies is installed, the web application is ready to be used.

## Usage

To use this web application, follow these steps:

1. **Installation**

   - Clone the Repository
   - Clone the project repository to your local machine using Git:

     ```sh
     git clone https://github.com/notUnEeVeN/Book-Binder.git
     ```

   - Set Up Environment Variables

     - Ensure that you've set up your environment variables.
     - Create a .env file in the project root and define the necessary variables, such as the database credentials and any other configuration settings.

   - Install Dependencies

     - Navigate to the project directory using the terminal or command prompt and run the following command to install the required dependencies specified in the package.json file:

       ```sh
        npm install
       ```

   - Set Up the Database
     - Make sure to have a MySQL database set up.
     - Configure the database connection in the .env file using the specified environment variables.

2. **Starting the Application**

   - Start the Server

     - Launch the web application by running the following command:

       ```sh
        npm start
       ```

   The application will start and be accessible through the web browser.

3. **User Actions**

   - Register or Log In

     - On the application's landing page, register for a new account or log in.

   - Explore and Use the Application
     - Explore the features of the application:
       - Creating book-related content
       - Keep track of favorite books

4. **Logging Out**

   - To log out of the application, click the "Logout" button in the navigation menu.

Users can follow these steps to get started and navigate the application effectively.

## Testing

To test this web application, users can follow these general instructions or commands:

**1. Installation and Setup:**

- Follow the installation and setup instructions mentioned above to ensure the application installed and running locally.

**2. API Testing (Optional): **

- To test the API endpoints, use tools like Postman, Insomnia, or cURL for API testing.
- Refer to the project's API documentation or README file for information about available API endpoints and how to use them.

**3. User Interface Testing:**

- Open a web browser and navigate to

  ```sh
  http://localhost:3001
  ```

  to access the application's user interface.

**4. Register or Log In:**

- A new user:

  - Click the "Sign Up" link to register for an account.
  - Provide name, email, and password.

- Already have an account:

  - Click the "Login" link
  - Provide email and password.

**5. Exploring the Application:**

- Test the application's various features:
  - Creating book-related content
  - Viewing your profile
  - Keeping a record of favorite or currently reading books

**6. Interaction and Data Testing:**

- Perform actions like:
  - Creating posts
  - Commenting on posts
  - Updating profile information

**7. Error Handling Testing:**

- Try intentionally entering incorrect information or triggering invalid actions to test how the application handles errors.

- Ensure that error messages are clear and informative.

**8. Log Out:**

- To test the logout functionality, click the "Logout" button if available.

**9. Cross-Browser Testing:**

- For thorough testing, consider using different web browsers to ensure that the application functions correctly and looks good across different browsers.
  - Chrome
  - Firefox
  - Safari
  - Brave

**10. Mobile and Responsive Testing:**

- Test the application's responsiveness by accessing it from various devices to ensure that the user interface adapts correctly.
  - Desktop
  - Tablet
  - Mobile

**12. Report Issues:**

If you encounter any bugs, issues, or unexpected behavior during testing, please document them with steps to reproduce and report them to the project's development team, if applicable.

Please note that the specific testing scenarios and procedures can vary based on the project's functionality and features.

## Credits

Thanks to everyone who worked on this project:

- [Tybalt Mallet](https://github.com/notUnEeVeN)
- [Tiffany Perez](https://github.com/pereztb02)
- [Clarice Kwong](https://github.com/Clkwong3)

## Links

Here are the deployment links for this project:

- Deployment via [Heroku](https://example.com)

- Deployment via [Github](https://notuneeven.github.io/Book-Binder/)

## Report Issue

If you encounter any issues, please report them on the project's [issue](https://github.com/notUnEeVeN/Book-Binder/issues) page.

## License

All rights reserved. Licensed under the MIT license.
