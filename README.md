# MailServer

This is a Node.js application that uses Express and Nodemailer to send emails when a tracked product is available in stock. The application's configuration is managed using environment variables using the dotenv package.

## Prerequisites

- Node.js installed on your system.

## Installation

Follow the steps below to set up and run the application:

1. Clone this repository on your local machine or download the project files.

2. In the project's root directory, run the following command to install the required dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the project's root directory and define the following environment variables:

   ```bash
   CHECK_STOCK_EMAIL=your_email@gmail.com
   CHECK_STOCK_PASSWORD=your_password
   ```

4. Start the application by running the following command:

   ```bash
   npm run start
   ```

   This will start the server on port 5000 and display a message indicating that the server is listening on that port.

## Usage

The application exposes a /v1/sendMail endpoint that accepts a POST request with the following data:

- email: The email address of the recipient of the email.
- product: The name of the product that has come back in stock.

The application will use the email credentials defined in the environment variables to send an email to the specified recipient, informing them that the product is available in stock.

You can test the application's functionality by sending a POST request to http://localhost:5000/v1/sendMail with the required data in the request body.

## Contribution

If you'd like to contribute to this project, feel free to do so. You can submit pull requests with your improvements, bug fixes, or other modifications.

## Credits

This project utilizes the following Node.js dependencies:

- Express: https://expressjs.com/
- Body-parser: https://www.npmjs.com/package/body-parser
- Nodemailer: https://nodemailer.com/
- Dotenv: https://www.npmjs.com/package/dotenv

## License

This project is licensed under the MIT License. See the LICENSE file for details.
