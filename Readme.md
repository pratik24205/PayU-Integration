```text
# PayU Payment Integration

This project demonstrates a simple payment integration using PayU's test payment gateway. The example form allows users to make a ₹10.00 payment by submitting the form. 

## Features

- Responsive Design: Utilizes Google Fonts and modern CSS for a sleek and professional look.
- Animated Interface: Includes animations using AOS library to enhance user experience.
- Payment Details: Preconfigured for a demo transaction with PayU test credentials.
- Secure Integration: Ensures security with a hash parameter for payment verification.

## Folder Structure

payu-integration/
├── node_modules/             # Dependencies required by npm
├── config/                   # Configuration files
│    ├── vite.config.js       # Vite configuration file
├── src/                      # Source code
│    ├── scripts/
│         ├── generatehash.ts # ts file for generating hash code
│    ├── index.html           # Main HTML file for the app
├── package-lock.json.        # Generated file for dependency tree integrity
├── package.json              # Project metadata and dependencies
├── README.md                 # Project documentation

## Technologies Used

- HTML5: For structuring the webpage.
- CSS3: For styling and animations.
- AOS (Animate On Scroll): For scroll-based animations.
- PayU Payment Gateway: Configured for initiating transactions.

## Prerequisites

Before using the project, ensure the following:
1. PayU Merchant Account: You need a PayU test or live merchant account to perform transactions.
2. Merchant Key and Salt: The `key` and `hash` parameters are specific to your PayU account. Update these values with your account details.
3. Transaction Hash: The hash is a security feature that must be generated on the server-side using your merchant key, transaction details, and salt.
- Replace test credentials (`key`, `txnid`, etc.) with actual PayU merchant credentials.
- Generate a valid hash key 

### Structure of the Project
This project includes:
- HTML file: Contains the payment form.
- CSS styling: Inline styles to make the form visually appealing.

### Payment Form Fields
The payment form includes:
- Merchant Details:
  - `key`: Merchant key provided by PayU.
  - `txnid`: Unique transaction ID (should be dynamically generated for each transaction).
  - `hash`: Security hash (must be generated on the backend).
- Customer Details:
  - `firstname`: Customer's first name.
  - `email`: Customer's email address.
  - `phone`: Customer's phone number.
- Payment Details:
  - `amount`: Payment amount.
  - `productinfo`: Description of the product or service.
- Redirect URLs:
  - `surl`: Success URL where the user is redirected after a successful payment.
  - `furl`: Failure URL where the user is redirected after a failed payment.

### Modify for Your Use
Update the following parameters with your details:
- Merchant Key: Replace the `key` field with your PayU merchant key.
- Transaction ID: Generate a unique transaction ID for every payment.
- Hash: Generate the hash on your server using PayU's algorithm. Replace the `hash` field with the generated hash.
- Redirect URLs: Replace `surl` and `furl` fields with your actual success and failure URLs.

###  Test the Integration
- Use the PayU test environment (`https://test.payu.in/_payment`) for testing payments.
- Switch to the PayU live environment (`https://secure.payu.in/_payment`) for production use.
## Deployment

- Host the `index.html` file on a web server for testing or production use.
- Ensure the payment form submits to the PayU endpoint (`https://test.payu.in/_payment` or production URL).
## Getting Started

## Clone the Repository 

git clone "https://github.com/pratik24205/PayU-Integration"

## Navigate to the project directory:

cd Payu-Integration

## Install dependencies:

npm install

## Run the development server:

npm run dev

## Open the application:

Visit http://localhost:3000 in your web browser to view the application



## references:
PayU Integration Documentation
React Documentation

## Disclaimer
This example uses static transaction details and a pre-generated hash for demonstration purposes only. For production use:
Generate unique transaction IDs dynamically.
Calculate the hash securely on the server.
Use HTTPS for secure communication.
