const date = new Date();
const dateContainer = document.getElementById('date-container');
const time = date.getHours() + ":" + date.getMinutes();

function updateTime(){
    dateContainer.innerHTML = time;
}

// check if the time set is equal to the date 
function checkAlarm(){
    const alarmTime = document.getElementById('alarm');
    console.log(time);
    if (alarmTime.value == time) {
      alert('Time to wake up!');
    }
}
setInterval(updateTime, 1000);
checkAlarm();





