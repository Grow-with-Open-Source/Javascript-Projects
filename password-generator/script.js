const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const strength = document.getElementById("strength");

function generatePassword() {
    const length = Number(lengthInput.value);

    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let characters = "";
    let password = "";

    if (uppercase.checked) {
        characters += upperChars;
        password += getRandomCharacter(upperChars);
    }

    if (lowercase.checked) {
        characters += lowerChars;
        password += getRandomCharacter(lowerChars);
    }

    if (numbers.checked) {
        characters += numberChars;
        password += getRandomCharacter(numberChars);
    }

    if (symbols.checked) {
        characters += symbolChars;
        password += getRandomCharacter(symbolChars);
    }

    if (characters.length === 0) {
        passwordInput.value = "Select an option";
        strength.textContent = "None";
        strength.style.color = "red";
        return;
    }

    while (password.length < length) {
        password += getRandomCharacter(characters);
    }

    password = shufflePassword(password);

    passwordInput.value = password;

    updateStrength(password);
}

function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

function shufflePassword(password) {
    return password
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("");
}

function updateStrength(password) {
    let score = 0;

    if (password.length >= 8) {
        score++;
    }

    if (password.length >= 12) {
        score++;
    }

    if (/[A-Z]/.test(password)) {
        score++;
    }

    if (/[a-z]/.test(password)) {
        score++;
    }

    if (/[0-9]/.test(password)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        score++;
    }

    if (score <= 2) {
        strength.textContent = "Weak";
        strength.style.color = "red";
    } else if (score <= 4) {
        strength.textContent = "Medium";
        strength.style.color = "orange";
    } else {
        strength.textContent = "Strong";
        strength.style.color = "green";
    }
}

copyBtn.addEventListener("click", async () => {
    if (!passwordInput.value) {
        return;
    }

    await navigator.clipboard.writeText(passwordInput.value);

    copyBtn.textContent = "Copied!";

    setTimeout(() => {
        copyBtn.textContent = "Copy";
    }, 1500);
});

generateBtn.addEventListener("click", generatePassword);

lengthInput.addEventListener("input", generatePassword);

uppercase.addEventListener("change", generatePassword);
lowercase.addEventListener("change", generatePassword);
numbers.addEventListener("change", generatePassword);
symbols.addEventListener("change", generatePassword);

generatePassword();