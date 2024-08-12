import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startBtn = document.querySelector('button');
startBtn.setAttribute('disabled', true);
const selectInput = document.querySelector("#datetime-picker");
const dataDays = document.querySelector('span[data-days]');
const dataHours = document.querySelector('span[data-hours]');
const dataMinutes = document.querySelector('span[data-minutes]');
const dataSeconds = document.querySelector('span[data-seconds]');

let userSelectedDate;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
        
        if (userSelectedDate < new Date()) {
            startBtn.setAttribute('disabled', true);
            iziToast.error({
                message: 'Please choose a date in the future',
            });
        } else {
            startBtn.removeAttribute('disabled');
        }
    },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % hour) / minute));
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

const addLeadingZero = (time) => {
    dataDays.innerHTML = String(time.days).padStart(2, '0');
    dataHours.innerHTML = String(time.hours).padStart(2, '0');
    dataMinutes.innerHTML = String(time.minutes).padStart(2, '0');
    dataSeconds.innerHTML = String(time.seconds).padStart(2, '0');
}

const onBtnClick = () => {
    const intervalId = setInterval(() => {
        const currentDate = new Date();  
        let distance = userSelectedDate - currentDate;

        if (distance < 0) {
            clearInterval(intervalId);
            startBtn.removeAttribute('disabled');
            selectInput.removeAttribute('disabled');
            return;
        }

        const time = convertMs(distance);
        addLeadingZero(time);

        startBtn.setAttribute('disabled', true);
        selectInput.setAttribute('disabled', true);
    }, 1000);
}

startBtn.addEventListener('click', onBtnClick);


