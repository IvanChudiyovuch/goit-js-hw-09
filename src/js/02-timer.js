import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  spanDays: document.querySelector('span[data-days]'),
  spanHours: document.querySelector('span[data-hours]'),
  spanMinutes: document.querySelector('span[data-minutes]'),
  spanSeconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= options.defaultDate) {
      alert('Please choose a date in the future');
      refs.startBtn.setAttribute('disabled', true);
    } else if (selectedDates[0] > options.defaultDate) {
      refs.startBtn.removeAttribute('disabled');
    }

    console.log(selectedDates[0]);
  },
};

const timer = {
  isActiv: false,

  start() {
    if (this.isActiv) {
      return;
    }

    const startTime = datePiker.selectedDates[0];

    this.isActiv = true;

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(deltaTime);

      updateClockface({ days, hours, minutes, seconds });
    }, 1000);
  },
};

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick(evt) {
  timer.start();
}

const datePiker = flatpickr('#datetime-picker', options);

function updateClockface({ days, hours, minutes, seconds }) {
  refs.spanDays.textContent = `${days}`;
  refs.spanHours.textContent = `${hours}`;
  refs.spanMinutes.textContent = `${minutes}`;
  refs.spanSeconds.textContent = `${seconds}`;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
