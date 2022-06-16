const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', onstartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const colorPicker = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;

    this.intervalId = setInterval(() => {
      const hexColor = getRandomHexColor();

      refs.body.style.backgroundColor = hexColor;
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

function onstartBtnClick(evn) {
  colorPicker.start();
}

function onStopBtnClick(evn) {
  colorPicker.stop();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
