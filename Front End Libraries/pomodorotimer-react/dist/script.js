const zeroPad = (num, places) => String(num).padStart(places, "0");

const accurateInterval = function (fn, time) {
  var cancel, nextAt, timeout, wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  wrapper = function () {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function () {
    return clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel };

};

class Length extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "length" }, /*#__PURE__*/
      React.createElement("h2", { id: this.props.id_label }, this.props.label), /*#__PURE__*/
      React.createElement("div", { class: "editor" }, /*#__PURE__*/
      React.createElement("button", {
        class: "btn btn-default",
        id: this.props.id_dec,
        onClick: this.props.dec }, /*#__PURE__*/

      React.createElement("i", { class: "fa fa-arrow-left" })), /*#__PURE__*/

      React.createElement("div", { class: "editor-time", id: this.props.id_length },
      this.props.length), /*#__PURE__*/

      React.createElement("button", {
        class: "btn btn-default",
        id: this.props.id_inc,
        onClick: this.props.inc }, /*#__PURE__*/

      React.createElement("i", { class: "fa fa-arrow-right" })))));




  }}


class Timer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let timer =
    zeroPad(Math.floor(this.props.time / 60), 2) +
    ":" +
    zeroPad(this.props.time % 60, 2);

    return /*#__PURE__*/(
      React.createElement("div", { class: "timer" }, /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-12" }, /*#__PURE__*/
      React.createElement("h2", { id: "timer-label" }, this.props.label))), /*#__PURE__*/


      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { class: "col-12" }, /*#__PURE__*/
      React.createElement("div", { class: "timer-time" }, /*#__PURE__*/
      React.createElement("div", { id: "time-left" }, timer))))));





  }}


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      breakTime: 5,
      sessionTime: 25,
      time: 1500,
      isRunning: false,
      label: "Session",
      intervalID: "" };


    this.decBreakTime = this.decBreakTime.bind(this);
    this.incBreakTime = this.incBreakTime.bind(this);
    this.decSessionTime = this.decSessionTime.bind(this);
    this.incSessionTime = this.incSessionTime.bind(this);
    this.startStop = this.startStop.bind(this);
    this.reset = this.reset.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.decTimer = this.decTimer.bind(this);
    this.startTimerCountDown = this.startTimerCountDown.bind(this);
    this.controlTimer = this.controlTimer.bind(this);
  }

  startTimer() {
    this.setState({
      breakTime: this.state.breakTime,
      sessionTime: this.state.sessionTime,
      time: this.state.time,
      isRunning: this.state.isRunning,
      label: this.state.label });

  }

  startTimerCountDown() {
    this.setState({
      intervalID: accurateInterval(() => {
        this.decTimer();
        this.controlTimer();
      }, 1000) });

  }

  controlTimer() {
    let timer = this.state.time;
    if (timer < 0) {
      if (this.state.intervalID) {
        this.state.intervalID.cancel();
      }
      if (this.state.label === "Session") {
        this.setState({ time: this.state.breakTime * 60, label: "Break" });
        this.startTimerCountDown();
      } else {
        this.setState({ time: this.state.sessionTime * 60, label: "Session" });
        this.startTimerCountDown();
      }
    } else if (timer == 0) {
      this.beepSound.play();
    }
  }

  decTimer() {
    this.setState({ time: this.state.time - 1 });
  }

  reset() {
    if (this.state.intervalID) this.state.intervalID.cancel();

    this.setState({
      breakTime: 5,
      sessionTime: 25,
      time: 1500,
      isRunning: false,
      label: "Session",
      intervalID: "" });


    this.beepSound.pause();
    this.beepSound.currentTime = 0;
  }

  decBreakTime() {
    if (!this.state.isRunning && this.state.breakTime > 1) {
      this.setState({
        breakTime: this.state.breakTime - 1 });

    }
  }

  incBreakTime() {
    if (!this.state.isRunning && this.state.breakTime < 60) {
      this.setState({
        breakTime: this.state.breakTime + 1 });

    }
  }

  decSessionTime() {
    if (!this.state.isRunning && this.state.sessionTime > 1) {
      this.setState({
        sessionTime: this.state.sessionTime - 1,
        time: (this.state.sessionTime - 1) * 60 });

    }
  }

  incSessionTime() {
    if (!this.state.isRunning && this.state.sessionTime < 60) {
      this.setState({
        sessionTime: this.state.sessionTime + 1,
        time: (this.state.sessionTime + 1) * 60 });

    }
  }

  startStop() {
    if (this.state.isRunning) {
      if (this.state.intervalID) this.state.intervalID.cancel();
    } else {
      this.startTimerCountDown();
    }

    this.setState({ isRunning: !this.state.isRunning });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "Pomodoro React Timer"), /*#__PURE__*/
      React.createElement("div", { class: "row editors" }, /*#__PURE__*/
      React.createElement("div", { class: "col" }, /*#__PURE__*/
      React.createElement(Length, {
        label: "Break Length",
        id_label: "break-label",
        id_inc: "break-increment",
        id_dec: "break-decrement",
        id_length: "break-length",
        inc: this.incBreakTime,
        dec: this.decBreakTime,
        length: this.state.breakTime })), /*#__PURE__*/


      React.createElement("div", { class: "col" }, /*#__PURE__*/
      React.createElement(Length, {
        label: "Session Length",
        id_label: "session-label",
        id_inc: "session-increment",
        id_dec: "session-decrement",
        id_length: "session-length",
        inc: this.incSessionTime,
        dec: this.decSessionTime,
        length: this.state.sessionTime }))), /*#__PURE__*/




      React.createElement("div", { class: "main-timer" }, /*#__PURE__*/
      React.createElement(Timer, { time: this.state.time, label: this.state.label }), /*#__PURE__*/

      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("button", {
        class: "btn btn-default",
        id: "start_stop",
        onClick: this.startStop }, /*#__PURE__*/

      React.createElement("i", {
        class: "fa " + (this.state.isRunning ? "fa-pause" : "fa-play") })), /*#__PURE__*/


      React.createElement("button", { class: "btn btn-default", id: "reset", onClick: this.reset }, /*#__PURE__*/
      React.createElement("i", { class: "fa fa-redo" })))), /*#__PURE__*/




      React.createElement("audio", {
        id: "beep",
        src: "https://github.com/dubining/web/blob/main/mixkit-repeating-arcade-beep-1084.wav?raw=true",
        ref: audio => {
          this.beepSound = audio;
        } })));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));