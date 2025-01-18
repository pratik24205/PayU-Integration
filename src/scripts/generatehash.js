const crypto = require("crypto");

// Replace these with your actual PayU credentials
const key = "Dk3vGe"; // Replace with your merchant key
const salt = "hiaoBDmH67Gp7wCx5YbWlliJEwqg6iQJ"; // Replace with your merchant salt

// Replace these with transaction details
const txnid = "txn123456"; // Unique transaction ID
const amount = "10.00"; // Amount to be paid
const productinfo = "Internship"; // Product information
const firstname = "Fundsroom"; // Customer's first name
const email = "fundsroom@example.com"; // Customer's email

// Optional user-defined fields (can be empty or null)
const udf1 = "";
const udf2 = "";
const udf3 = "";
const udf4 = "";
const udf5 = "";

// Create the hash string using the required formula
const hashString = `${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|${udf1}|${udf2}|${udf3}|${udf4}|${udf5}||||||${salt}`;

// Generate the hash using SHA-512
const hash = crypto.createHash("sha512").update(hashString).digest("hex");

// Output the generated hash
console.log("Generated Hash:", hash);
