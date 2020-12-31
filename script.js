
function updateTime(){
    const date = new Date();
    const dateContainer = document.getElementById('date-container');
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    dateContainer.innerHTML = time;
}

setInterval(updateTime, 1000);