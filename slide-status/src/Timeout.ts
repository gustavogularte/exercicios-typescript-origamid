export default class Timeout {
  id;
  handler;
  start;
  timeLeft;
  constructor(handler: TimerHandler, time: number) {
    this.id = setTimeout(handler, time);
    this.handler = handler;
    this.start = Date.now();
    this.timeLeft = time;
    console.log(this.id)
  }

  clear() {
    clearTimeout(this.id);
  }

  pause() {
    this.clear();
    const passed = Date.now() - this.start;
    this.timeLeft -= passed;
  }

  continue() {
    this.clear();
    this.id = setTimeout(this.handler, this.timeLeft);
    this.start = Date.now();
  }
}
