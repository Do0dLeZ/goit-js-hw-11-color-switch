'use strict';

// ============= Main Params =============

let timerId;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  btnStart: document.querySelector('button[data-action=start]'),
  btnStop: document.querySelector('button[data-action=stop]'),
  body: document.querySelector('body'),
};

// ============= Model =============

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const timerLogic = () => {
  refs.body.setAttribute(
    'style',
    `background-color: ${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`,
  );
};

// ============= Renders =============

const renderDisableStart = () => {
  refs.btnStart.disabled = true;
  refs.btnStop.disabled = false;
};

const renderDisableStop = () => {
  refs.btnStart.disabled = false;
  refs.btnStop.disabled = true;
};

// ============= Handlers =============

const handlerStart = e => {
  if (timerId) {
    return;
  }
  timerId = setInterval(timerLogic, 1000);
  renderDisableStart();
};

const handlerStop = e => {
  clearInterval(timerId);
  timerId = undefined;
  renderDisableStop();
};

// ============= Events =============

refs.btnStart.addEventListener('click', handlerStart);
refs.btnStop.addEventListener('click', handlerStop);

// ============= On Page Load =============

renderDisableStop();
