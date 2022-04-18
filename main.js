"use strict";

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const time = document.getElementById("time");
const distance = document.getElementById("distance");
let startTime;
let timeoutId;

// ストップウォッチ
function timer() {
  const d = new Date(Date.now() - startTime);
  const s = Number(d.getSeconds());
  // 距離計算
  const k = (s * 340).toLocaleString();
  time.textContent = `${s}秒`;
  distance.textContent = `約${k}m`;
  timeoutId = setTimeout(() => {
    timer();
  }, 1000);
}

// スタートボタンが押された時の処理
function start() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  startTime = Date.now();
  timer();
}

// ストップボタンが押された時の処理
function stop() {
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  clearTimeout(timeoutId);
}

// リセットボタンが押された時の処理
function reset() {
  startTime = 0;
  time.textContent = `0秒`;
  distance.textContent = `約0m`;
  startBtn.disabled = false;
  resetBtn.disabled = true;
}
