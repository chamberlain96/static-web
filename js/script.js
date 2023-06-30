// JavaScript code for Chamberlain Tech Academy static application

// Example: Display a welcome message
function displayWelcomeMessage() {
  console.log("Welcome to Chamberlain Tech Academy!");
}

// Example: Calculate the total number of courses
function getTotalCourses() {
  var courseList = document.querySelectorAll("ul li");
  var totalCourses = courseList.length;
  console.log("Total number of courses: " + totalCourses);
}

// Example: Send a contact form submission
function submitContactForm() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  // Validate the form inputs
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Please fill in all the fields.");
    return;
  }

  // Send the form data
  var formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Here, you can implement the code to send the form data to the server
  console.log("Form submitted:", formData);

  // Reset the form inputs
  nameInput.value = "";
  emailInput.value = "";
  messageInput.value = "";
}

// Example: Add event listeners to buttons
function addEventListeners() {
  var welcomeButton = document.getElementById("welcomeButton");
  var totalCoursesButton = document.getElementById("totalCoursesButton");
  var submitFormButton = document.getElementById("submitFormButton");

  welcomeButton.addEventListener("click", displayWelcomeMessage);
  totalCoursesButton.addEventListener("click", getTotalCourses);
  submitFormButton.addEventListener("click", submitContactForm);
}

// Call the function to add event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addEventListeners);
