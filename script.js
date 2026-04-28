// setInterval(function, ms)
// 1. The Global State and toggle for dark mode
var is24HourFormat = true;
const toggleBtn = document.querySelector('#theme-toggle');

// 2. The Clock Object (The "Methods")
var clockApp = {
    
    formatNumber: function(num) {
        // TODO: If num is less than 10, return it with a "0" in front
        // Otherwise, just return the num
        if(num < 10)
        {
            return "0" + num;
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
        var now = new Date();
        var h = now.getHours();
        var m = now.getMinutes();
        var s = now.getSeconds();

        // TODO: Use the formatNumber method to clean up minutes and seconds
        // Example: m = this.formatNumber(m);

        m = this.formatNumber(m);
        s = this.formatNumber(s);

        if(h > 12)
        {
            let h12 = h % 2;
            if(h12 === 0)
            {
                h = h12;
            }
        }

        return h + ":" + m + ":" + s;
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

clockApp.updateDisplay(setInterval(handleToggle(),1000))


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


const twelveHour = document.querySelector('#clock-button');
const display = document.getElementById("clock-display");

twelveHour.addEventListener('click', function(){
    
    if(document.body.classList.toggle('clock-button'))
    {
        is24HourFormat = false;
        // const newTime = document.createElement("h2");
        // newTime.innerHTML = clockApp.tweleveHourDisplay();
        display.innerHTML = clockApp.tweleveHourDisplay();

        twelveHour.textContent = "Click to 24 Hour Time";
    }
    else{
        twelveHour.textContent = "Click to 12 Hour Time";
    }
})
