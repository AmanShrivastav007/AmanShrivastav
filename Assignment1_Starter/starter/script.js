document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const menu = document.querySelector(".menu");

  // Function to toggle mobile menu
  function toggleMobileMenu() {
      menu.classList.toggle("show");
  }

  // Event listener for mobile menu toggle
  mobileMenu.addEventListener("click", toggleMobileMenu);

  // Function to handle user registration
  function processRegistration(event) {
      event.preventDefault();
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      // Check if username and password are provided
      if (!username || !password) {
          alert("Please enter both username and password.");
          return;
      }

      // Store user credentials in localStorage
      localStorage.setItem("RegisteredUsers", username + ":" + password + ";");

      // Provide feedback to the user
      alert("Registration successful!");
  }

  // Function to handle user login
  function processLogin(event) {
      event.preventDefault();
      let usernameEntered = document.getElementById("username").value;
      let passwordEntered = document.getElementById("password").value;

      // Retrieve registered users from localStorage
      const registeredUsers = localStorage.getItem("RegisteredUsers");

      // Check if any users are registered
      if (!registeredUsers) {
          alert("No users are registered.");
          return;
      }

      // Split registered users into username-password pairs
      let usernamePasswordPairs = registeredUsers.split(";");

      // Check if entered username and password match any registered user
      let loginStatus = usernamePasswordPairs.some(pair => {
          let [registeredUsername, registeredPassword] = pair.split(":");
          return usernameEntered === registeredUsername && passwordEntered === registeredPassword;
      });

      // Provide login status feedback to the user
      if (loginStatus) {
          alert("Login successful!");
      } else {
          alert("Login failed. Invalid credentials.");
      }
  }

  // Event listener for user registration form submission
  document.getElementById("registration-form").addEventListener("submit", processRegistration);

  // Event listener for user login form submission
  document.getElementById("login-form").addEventListener("submit", processLogin);
});
function processLogin(event) {
  event.preventDefault();
  let usernameEntered = document.getElementById("username").value;
  let passwordEntered = document.getElementById("password").value;

  // Retrieve registered users from localStorage
  const registeredUsers = localStorage.getItem("RegisteredUsers");

  // Check if any users are registered
  if (!registeredUsers) {
      alert("No users are registered.");
      return;
  }

  // Split registered users into username-password pairs
  let usernamePasswordPairs = registeredUsers.split(";");

  // Check if entered username and password match any registered user
  let loginStatus = usernamePasswordPairs.some(pair => {
      let [registeredUsername, registeredPassword] = pair.split(":");
      return usernameEntered === registeredUsername && passwordEntered === registeredPassword;
  });

  // Provide login status feedback to the user
  if (loginStatus) {
      alert("Login successful!");
  } else {
      alert("Login failed. Invalid credentials.");
  }
}
