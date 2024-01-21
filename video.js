var users = [
    { username: "yeasib", password: "y98", access: ["Math-03", "Java"] },
    { username: "mowmita", password: "m98", access: ["Java"] },
];

function authenticate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var user = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (user) {
        // Update dropdown options based on user access
        updateDropdownOptions(user.access);

        document.getElementById("loginForm").style.display = "none";
        document.getElementById("videoForm").style.display = "block";
        return false;
    } else {
        alert("Authentication failed. Please check your username and password.");
        return false;
    }
}

function updateDropdownOptions(access) {
    // Get the course dropdown element
    var courseDropdown = document.getElementById("course");

    // Remove existing options
    while (courseDropdown.options.length > 0) {
        courseDropdown.remove(0);
    }

    // Add new options based on user access
    access.forEach(function(course) {
        var option = document.createElement("option");
        option.value = course;
        option.text = course;
        courseDropdown.add(option);
    });
}

function displayVideo() {
    var course = document.getElementById("course").value;
    var videoTitle = document.getElementById("videoTitle").value;

    var videoLink = getVideoLink(course, videoTitle);

    if (videoLink) {
        document.getElementById("videoContainer").innerHTML = `
            <h2>${videoTitle}</h2>
            <div id="videoWrapper">
                <iframe id="videoFrame" src="${videoLink}" frameborder="0" allowfullscreen></iframe>
                <button id="fullScreenButton" onclick="toggleFullScreen()">Full Screen</button>
            </div>
        `;
        document.getElementById("videoContainer").style.display = "block";
    } else {
        alert("Video not available for the selected course and title.");
    }
}

function getVideoLink(course, videoTitle) {
    if (course === "Math-03" && videoTitle === "Video-1") {
        return "https://1drv.ms/v/s!ApCuyg6c8MEzmQTPlNm7zrna-K3f";
    } else if (course === "Java" && videoTitle === "Video-2") {
        return "https://1drv.ms/v/s!ApCuyg6c8MEzmQInQ9DbcC2llpKr";
    } else {
        return null;
    }
}

function toggleFullScreen() {
    var videoFrame = document.getElementById("videoFrame");

    if (videoFrame.requestFullscreen) {
        videoFrame.requestFullscreen();
    } else if (videoFrame.mozRequestFullScreen) {
        videoFrame.mozRequestFullScreen();
    } else if (videoFrame.webkitRequestFullscreen) {
        videoFrame.webkitRequestFullscreen();
    } else if (videoFrame.msRequestFullscreen) {
        videoFrame.msRequestFullscreen();
    }
}

function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    var icon = document.querySelector(`#${inputId} + .password-icon`);

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}
