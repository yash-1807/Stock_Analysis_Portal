// Retrieve the error message from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');

// Function to display the error message
const displayErrorMessage = (message) => {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
};

// Check if there's an error message and display it
if (error) {
    displayErrorMessage(error);
}
