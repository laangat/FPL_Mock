const database = require("database");

signupButton.addEventListener("click", async function () {
  // Check input validity and enable/disable the submit button
  const isFormValid =
    firstName.validity.valid &&
    lastName.validity.valid &&
    email.validity.valid &&
    username.validity.valid &&
    password.validity.valid &&
    confirmPassword.validity.valid &&
    password.value === confirmPassword.value;

  if (!isFormValid) {
    return;
  }

  // Connect to the database
  const connection = await database.connect();

  // Store the credentials in the database
  const query = `INSERT INTO users (first_name, last_name, email, username, password) VALUES ('${firstName.value}', '${lastName.value}', '${email.value}', '${username.value}', '${password.value}')`;
  await connection.query(query);

  // Close the connection to the database
  connection.close();

  // Redirect to the home page
  window.location.href = "/";
});
