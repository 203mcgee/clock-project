// setInterval(function, ms)
// 1. The Global State and toggle for dark mode
var is24HourFormat = true;
const toggleBtn = document.querySelector("#theme-toggle");

// 2. The Clock Object (The "Methods")
var clockApp = {
    formatNumber: function (num) {
        // TODO: If num is less than 10, return it with a "0" in front
        // Otherwise, just return the num

        if (num < 10) {
            return "0" + num;
        }
        return num;
        // https://www.w3schools.com/jsref/jsref_gethours.asp
    },

    getTimeString: function () {
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();

        // TODO: Use the formatNumber method to clean up minutes and seconds
        // Example: m = this.formatNumber(m);

        m = this.formatNumber(m);
        s = this.formatNumber(s);

        if (!is24HourFormat) {
            // credit to: https://stackoverflow.com/questions/10556879/changing-the-1-24-hour-to-1-12-hour-for-the-gethours-method
            h = now.getHours() % 12 || 12;
            return h + ":" + m + ":" + s;
        }



        return h + ":" + m + ":" + s;
    },

    updateDisplay: function () {
        // TODO: Get the element 'clock-display' and change its text
        // to the result of this.getTimeString()

        const clock = document.getElementById("clock-display");

        clock.innerHTML = this.getTimeString();
    },
};

// 3. The Standalone Functions
function handleToggle() {
    // TODO: Flip the is24HourFormat variable (true to false, or false to true)
    is24HourFormat = !is24HourFormat;
}

// 4. Starting the Clock
// TODO: Use setInterval to call clockApp.updateDisplay every 1000ms
// setInterval(function, ms)

setInterval(() => {
    clockApp.updateDisplay();
}, 1000);


const twelveHour = document.querySelector("#clock-button");

const display = document.getElementById("clock-display");

twelveHour.addEventListener("click", function () {
    document.body.classList.toggle("clock-button");
    if (document.body.classList.contains("clock-button")) {
        is24HourFormat = false;
        clockApp.updateDisplay();
        twelveHour.textContent = "Click to 24 Hour Time";
    } else {
        is24HourFormat = true;
        clockApp.updateDisplay();
        twelveHour.textContent = "Click to 12 Hour Time";
    }
});

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        toggleBtn.textContent = "Switch to Dark Mode";
    }
});
