
// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Function to increase font size
function increaseFontSize() {
    document.body.style.fontSize = "larger";
    setCookie("fontSize", "larger", 365); // Set cookie for 1 year
}

// Function to decrease font size
function decreaseFontSize() {
    document.body.style.fontSize = "smaller";
    setCookie("fontSize", "smaller", 365); // Set cookie for 1 year
}

// Function to reset font size to default
function resetFontSize() {
    document.body.style.fontSize = ""; // Reset to default
    setCookie("fontSize", "", -1); // Expire the cookie to remove it
}

// When the page loads, check if there's a font size cookie and apply it
window.onload = function () {
    var fontSize = getCookie("fontSize");
    if (fontSize) {
        document.body.style.fontSize = fontSize;
    }
};
