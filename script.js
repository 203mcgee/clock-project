// setInterval(function, ms)
// 1. The Global State and toggle for dark mode
var is24HourFormat = true;
const toggleBtn = document.querySelector("#theme-toggle");

// 2. The Clock Object (The "Methods")
var clockApp = {
    formatNumber: function (num) {
        // TODO: If num is less than 10, return it with a "0" in front
        // Otherwise, just return the num
        // https://www.w3schools.com/jsref/jsref_gethours.asp
        if (num < 10) {
            return "0" + num;
        }
        return num;
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

        return h + ":" + m + ":" + s;
    },

    updateDisplay: function () {
        // TODO: Get the element 'clock-display' and change its text
        // to the result of this.getTimeString()
        const clock = document.getElementById("clock-display");

        clock.innerHTML = this.getTimeString();
    },
    tweleveHourDisplay: function () {
        var now12 = new Date();
        var h12 = now12.getHours();
        var m12 = now12.getMinutes();
        var s12 = now12.getSeconds();

        m12 = this.formatNumber(m12);
        s12 = this.formatNumber(s12);

        // credit to: https://stackoverflow.com/questions/10556879/changing-the-1-24-hour-to-1-12-hour-for-the-gethours-method
        if (h12 > 12) {
            h12 = now12.getHours() % 12 || 12;
            return h12 + ":" + m12 + ":" + s12;
        }
    },
};

// 3. The Standalone Functions
function handleToggle() {
    // TODO: Flip the is24HourFormat variable (true to false, or false to true)
    is24HourFormat = false;
}

// 4. Starting the Clock
// TODO: Use setInterval to call clockApp.updateDisplay every 1000ms
// setInterval(function, ms)

clockApp.updateDisplay(setInterval(handleToggle(), 1000));

// 2. Add the Event Listener
toggleBtn.addEventListener("click", () => {
    // 3. Use the .toggle() method on classList
    // This adds 'dark-theme' if it's missing, and removes it if it's there
    document.body.classList.toggle("dark-theme");

    // Bonus: Update the button text dynamically
    if (document.body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "Switch to Light Mode";
    } else {
        toggleBtn.textContent = "Switch to Dark Mode";
    }
});

const twelveHour = document.querySelector("#clock-button");

const display = document.getElementById("clock-display");

twelveHour.addEventListener("click", function () {
    document.body.classList.toggle("clock-button");
      if (document.body.classList.contains("clock-button")) {
        is24HourFormat = false;
        display.innerHTML = clockApp.tweleveHourDisplay();
        twelveHour.textContent = "Click to 24 Hour Time";
      } else {
        is24HourFormat = true;
        display.innerHTML = clockApp.getTimeString();
        twelveHour.textContent = "Click to 12 Hour Time";
      }
});
