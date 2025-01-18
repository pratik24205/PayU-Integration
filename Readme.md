# PayU Payment Integration with React

This project demonstrates integrating the PayU payment gateway into a React application. The example is built using TypeScript and React functional components.

## Features

- Collects payment details dynamically.
- Configures and submits a payment form to PayU's test environment.
- Provides success and failure callbacks.

## Installation

### Prerequisites

- Node.js installed on your system.
- A PayU test account for merchant credentials.

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Configuration

### PayU Merchant Details

Update the `payuConfig` object in the `handlePayment` function within `App.tsx`:

```typescript
const payuConfig = {
  key: "your_merchant_key", // Replace with your PayU merchant key
  txnid: "txn123456", // Unique transaction ID
  amount: "1.00", // Amount to be paid
  firstname: "Jeevan", // Customer's first name
  email: "jeevankn934@gmail.com", // Customer's email
  phone: "8088951361", // Customer's phone
  productinfo: "Sample Product", // Product info
  surl: "http://localhost:3000/success", // Success URL
  furl: "http://localhost:3000/failure", // Failure URL
  hash: "precomputed_hash_here", // Precomputed hash
};
```

#### How to Generate the Hash

Use the PayU hash generation formula with your merchant key and salt. Refer to PayU's documentation for details.

### Success and Failure URLs

Update the URLs to point to your backend or desired endpoints:

- `surl`: The endpoint that will handle successful payments.
- `furl`: The endpoint that will handle failed payments.

## Usage

1. Run the application locally:
   ```bash
   npm start
   ```
2. Open the browser and navigate to `http://localhost:3000`.
3. Click the **Pay Now** button to initiate the payment process.

## Code Explanation

### `handlePayment` Function

- Dynamically creates a form with required fields for PayU.
- Uses `POST` method to submit payment details to the PayU test environment.
- Example test URL: `https://test.payu.in/_payment`.

### Inline Styles

Defined for a simple and clean UI:

- Centered content with flexbox.
- A styled button to trigger the payment process.

## Notes

- This implementation is for the PayU **test environment**. Use `https://secure.payu.in/_payment` for production.
- Ensure that the hash is securely generated on your backend to avoid security vulnerabilities.
- Do not expose sensitive information like the merchant key and salt in the frontend.

## References

- [PayU Integration Documentation](https://developer.payu.in/)
- [React Documentation](https://reactjs.org/)

---

Feel free to modify and expand this project based on your requirements!

