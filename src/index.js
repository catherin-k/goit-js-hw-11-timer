import css from "./css/styles.css";

const refs = {
  days: document.querySelector('span[data-value="days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  mins: document.querySelector('span[data-value="mins"]'),
  secs: document.querySelector('span[data-value="secs"]'),
};

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021"),
});
console.dir(CountdownTimer);

function CountdownTimer(i) {
  setInterval(() => {
    const currentTime = Date.now();
    const time = i.targetDate - currentTime;

    //

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.days.innerHTML = days;
    refs.hours.innerHTML = hours;
    refs.mins.innerHTML = mins;
    refs.secs.innerHTML = secs;
  }, 1000);
}

function pad(value) {
  return String(value).padStart(2, "0");
}
