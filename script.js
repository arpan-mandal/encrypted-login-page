const hashedPasscode = "YOUR_HASHED_PASSCODE_HERE"; // Replace with your hashed passcode

async function sha256(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
}

async function login() {
    const inputPasscode = document.getElementById("passcode").value;
    const hashedInput = await sha256(inputPasscode);

    if (hashedInput === hashedPasscode) {
        localStorage.setItem("auth", "true");
        window.location.href = "home/"; // Redirect to home folder
    } else {
        showWrongPasscodeNotification(); // Show notification on wrong passcode
    }
}

// Show wrong passcode notification
function showWrongPasscodeNotification() {
    const wrongPasscodeBox = document.getElementById("wrong-passcode-box");
    wrongPasscodeBox.classList.remove("hidden");

    setTimeout(() => {
        wrongPasscodeBox.classList.add("hidden");
    }, 3000);
}

// Show warning notification if redirected from home page due to not being logged in
function showWarningIfNeeded() {
    if (localStorage.getItem("warning") === "true") {
        const warningBox = document.getElementById("warning-box");
        warningBox.classList.remove("hidden");
        localStorage.removeItem("warning");

        setTimeout(() => {
            warningBox.classList.add("hidden");
        }, 5000);
    }
}

// Check authentication when loading home page
if (window.location.pathname.includes("/home/")) {
    if (!localStorage.getItem("auth")) {
        localStorage.setItem("warning", "true");
        window.location.href = "../index.html"; // Redirect back to login page
    }
}

window.onload = function() {
    showWarningIfNeeded();
};
