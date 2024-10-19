function detectMobile() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        window.location.href = "android.html"; // Redirect to Android layout page
    }
}

window.onload = detectMobile;
