// variables

let workTittle = document.getElementById('work')
let breakTittle = document.getElementById('break')

let workTime = 25;
let breakTime = 5;

let seconds = '00';

//display

window.onload = () => {
    document.getElementById('minutes').innerHTML = workTime
    document.getElementById('seconds').innerHTML = seconds

    workTittle.classList.add('active')
}

//function to start timer

function start() {
    //change controls
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';

    //change time
    seconds = 59

    let workMinutes = workTime - 1;
    let breakMinutes = breakTime - 1

    let breakCount = 0;

    //countDown
    let timerFunction = () => {

        //change the display
        document.getElementById('minutes').innerHTML = (workMinutes < 10) ? '0' + workMinutes : workMinutes;
        document.getElementById('seconds').innerHTML = (seconds < 10) ? '0'+ seconds : seconds;

        //start
        seconds--

        if (seconds === -1) {
            workMinutes--
            if (workMinutes === -1) {
                if (breakCount % 2 === 0) {
                    workMinutes = breakMinutes
                    breakCount++

                    workTittle.classList.remove('active')
                    breakTittle.classList.add('active')
                } else {
                    workMinutes = workTime
                    breakCount++

                    workTittle.classList.add('active')
                    breakTittle.classList.remove('active')
                }
            }
            seconds = 59
        }
    }

    // Interval
    setInterval (timerFunction, 1000)
}


