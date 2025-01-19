# PayU Payment Integration

This project demonstrates a simple payment integration using PayU's test payment gateway. The example form allows users to make a ₹10.00 payment by submitting the form. 

## Features

- Responsive design using HTML and CSS.
- Pre-configured merchant and payment details for testing.
- Secure handling of payment parameters with a hashed value.

## Prerequisites

1. **PayU Merchant Account**: You need a PayU test or live merchant account to perform transactions.
2. **Merchant Key and Salt**: The `key` and `hash` parameters are specific to your PayU account. Update these values with your account details.
3. **Transaction Hash**: The hash is a security feature that must be generated on the server-side using your merchant key, transaction details, and salt.

---

## How to Use

### 1. Structure of the Project
This project includes:
- **HTML file**: Contains the payment form.
- **CSS styling**: Inline styles to make the form visually appealing.

### 2. Payment Form Fields
The payment form includes:
- **Merchant Details**:
  - `key`: Merchant key provided by PayU.
  - `txnid`: Unique transaction ID (should be dynamically generated for each transaction).
  - `hash`: Security hash (must be generated on the backend).
- **Customer Details**:
  - `firstname`: Customer's first name.
  - `email`: Customer's email address.
  - `phone`: Customer's phone number.
- **Payment Details**:
  - `amount`: Payment amount.
  - `productinfo`: Description of the product or service.
- **Redirect URLs**:
  - `surl`: Success URL where the user is redirected after a successful payment.
  - `furl`: Failure URL where the user is redirected after a failed payment.

### 3. Modify for Your Use
Update the following parameters with your details:
- **Merchant Key**: Replace the `key` field with your PayU merchant key.
- **Transaction ID**: Generate a unique transaction ID for every payment.
- **Hash**: Generate the hash on your server using PayU's algorithm. Replace the `hash` field with the generated hash.
- **Redirect URLs**: Replace `surl` and `furl` fields with your actual success and failure URLs.

### 4. Test the Integration
- Use the **PayU test environment** (`https://test.payu.in/_payment`) for testing payments.
- Switch to the **PayU live environment** (`https://secure.payu.in/_payment`) for production use.

### 5. Hash Generation
The hash is a SHA-512 encrypted string combining the following parameters in this order:

hash = sha512(key|txnid|amount|productinfo|firstname|email|||||||||||salt)

You must calculate this hash server-side using your merchant key and salt. Never expose your salt in the frontend.

---

## Example Hash Generation Code

Here’s an example of generating the hash in Node.js:

```javascript
const crypto = require('crypto');

function generateHash(key, txnid, amount, productinfo, firstname, email, salt) {
  const data = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${salt}`;
  return crypto.createHash('sha512').update(data).digest('hex');
}

const hash = generateHash(
  'Dk3vGe', 
  'txn123456', 
  '10.00', 
  'Internship', 
  'Fundsroom', 
  'fundsroom@example.com', 
  'your_salt_here'
);
console.log('Hash:', hash);

References:
PayU Integration Documentation
React Documentation

Disclaimer
This example uses static transaction details and a pre-generated hash for demonstration purposes only. For production use:

Generate unique transaction IDs dynamically.
Calculate the hash securely on the server.
Use HTTPS for secure communication.
