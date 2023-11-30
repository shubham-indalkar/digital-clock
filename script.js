
let clock = document.getElementById('clock');

setInterval(updateTime, 1000);


function updateTime() {
    let date = new Date();
    // console.log(date);
    let hours = date.getHours().toString().padStart(2, '0');
    // console.log(hours);
    let minutes = date.getMinutes().toString().padStart(2, '0');
    // console.log(minutes);
    let seconds = date.getSeconds().toString().padStart(2, '0');
    // console.log(seconds);
    let meridiem = hours >= 12 ? 'PM' : 'AM';
    
    let formattedTime = `${hours}:${minutes}:${seconds} ${meridiem}`;
    // console.log(formattedTime);
    
    clock.textContent = formattedTime;
}

