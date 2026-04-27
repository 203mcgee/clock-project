// setInterval(function, ms)
// 1. The Global State
var is24HourFormat = true;

// 2. The Clock Object (The "Methods")
var clockApp = {
    
    formatNumber: function(num) {
        // TODO: If num is less than 10, return it with a "0" in front
        // Otherwise, just return the num
        if(num < 10)
        {
            return 0;
        }
        return num;
    },

    getTimeString: function() {
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

   
 updateDisplay: function() {
        // TODO: Get the element 'clock-display' and change its text
        // to the result of this.getTimeString()
        const clock = document.getElementById("clock-display");

        clock.innerHTML =  this.getTimeString();

    }
    ,
    tweleveHourDisplay: function() {
        
    }
};


// 3. The Standalone Functions
function handleToggle() {
    // TODO: Flip the is24HourFormat variable (true to false, or false to true)
    is24HourFormat = false;
}

// 4. Starting the Clock
// TODO: Use setInterval to call clockApp.updateDisplay every 1000ms
// setInterval(function, ms)

clockApp.updateDisplay(setInterval(1000))

const toggleBtn = document.querySelector('#theme-toggle');

// 2. Add the Event Listener
toggleBtn.addEventListener('click', () => {
  
  // 3. Use the .toggle() method on classList
  // This adds 'dark-theme' if it's missing, and removes it if it's there
  document.body.classList.toggle('dark-theme');

  // Bonus: Update the button text dynamically
  if (document.body.classList.contains('dark-theme')) {
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
