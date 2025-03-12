const jwt = require("jsonwebtoken");
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2QwMjdiMTNlYThiYTFhZWFjYzljNGIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDE2OTQ5MTQsImV4cCI6MTc0MjI5OTcxNH0._NzIiBD5xHCXmLrINVPRIsUaOAPcB97tGymJQFkFXpY"; // Replace with actual token
const decoded = jwt.decode(token);
console.log(decoded);
