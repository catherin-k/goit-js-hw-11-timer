import css from "./css/styles.css";

// const refs = {
//   days: document.querySelector('span[data-value="days"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   mins: document.querySelector('span[data-value="mins"]'),
//   secs: document.querySelector('span[data-value="secs"]'),
// };

// new CountdownTimer({
//   selector: "#timer-1",
//   targetDate: new Date("Jan 01, 2021"),
// });
// console.dir(CountdownTimer);

// function CountdownTimer(i) {
//   setInterval(() => {
//     const currentTime = Date.now();
//     const time = i.targetDate - currentTime;

//     //

//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     refs.days.innerHTML = days;
//     refs.hours.innerHTML = hours;
//     refs.mins.innerHTML = mins;
//     refs.secs.innerHTML = secs;
//   }, 1000);
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }
class CountdownTimer {
  //
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };
  }

  startTimer() {
    setInterval(() => {
      const time = new Date(this.targetDate) - Date.now();

      //

      this.days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      this.hours = this.pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      );
      this.mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      this.secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      this.refs.days.innerHTML = this.days;
      this.refs.hours.innerHTML = this.hours;
      this.refs.mins.innerHTML = this.mins;
      this.refs.secs.innerHTML = this.secs;
    }, 1000);
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jan 01, 2021"),
});

timer.startTimer();
