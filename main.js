// Define your secret passcodes here
const correctPasscodes = ["C1XG7P", "B9J2K8", "F4L3R7", "D6N5H9", "G8T1Q3", "E2V7S6","P9W4A5", "M1Y6Z2", "K5X3B4", "H7C9J1", "Q4R2F8", "S6T1D7","N3V5E9", "A8W2P6", "Z1Y4M5", "B5X7K3", "C9J1H2", "F8R4Q6","D7S9T1", "E9N3V5", "P6A8W2", "M5Z1Y4", "K3B5X7", "H2C9J1","Q6F8R4", "S1D7S9", "V5E9N3", "W2P6A8", "Y4M5Z1", "X7K3B5","J1H2C9", "R4Q6F8", "T9S1D7", "N3V5E9", "A8W2P6", "Z1Y4M5","B5X7K3", "C9J1H2", "F8R4Q6", "D7S9T1", "E9N3V5", "P6A8W2", "M5Z1Y4", "K3B5X7"];

function checkPasscode() {
    const userInput = document.getElementById("passcode-input").value;
    const feedback = document.getElementById("feedback-message");

    if (correctPasscodes.includes(userInput)) {
        feedback.textContent = "Passcode accepted! Redirecting...";
        feedback.style.color = "green";
        // Redirect the user to the next page after a short delay
        setTimeout(() => {
            window.location.href = "studysets.html";
        }, 1500); // Redirect after 1.5 seconds
    } else {
        feedback.textContent = "Incorrect passcode. Please try again.";
        feedback.style.color = "red";
    }
}
