const pads = [
{
  key: 'Q',
  keyCode: 81,
  name: 'Guit C',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/guitar-electric/C3.wav?raw=true' },

{
  key: 'W',
  keyCode: 87,
  name: 'Guit D',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/guitar-electric/Ds3.mp3?raw=true' },

{
  key: 'E',
  keyCode: 69,
  name: 'Guit F',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/guitar-electric/Fs3.wav?raw=true' },

{
  key: 'A',
  keyCode: 65,
  name: 'Piano C',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/piano/C3.wav?raw=true' },

{
  key: 'S',
  keyCode: 83,
  name: 'Piano D',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/piano/Ds3.wav?raw=true' },

{
  key: 'D',
  keyCode: 68,
  name: 'Piano F',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/piano/Fs3.wav?raw=true' },

{
  key: 'Z',
  keyCode: 90,
  name: 'Horn C',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/french-horn/C3.mp3?raw=true' },

{
  key: 'X',
  keyCode: 88,
  name: 'Horn D',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/french-horn/D4.mp3?raw=true' },

{
  key: 'C',
  keyCode: 67,
  name: 'Horn F',
  link: 'https://github.com/nbrosowsky/tonejs-instruments/blob/master/samples/french-horn/F4.mp3?raw=true' }];



class DrumPad extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: false };


    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.play = this.play.bind(this);
  }

  play() {
    const sound = document.getElementById(this.props.keyBtn);
    sound.currentTime = 0;
    sound.play();

    this.props.displayMsg(this.props.name);
  }

  handleKeyPress(event) {
    if (event.keyCode === this.props.btnCode) {
      this.play();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("button", {
        id: this.props.name,
        class: "btn btn-default drum-pad text-center", onClick: this.play }, /*#__PURE__*/

      React.createElement("audio", { class: "clip", id: this.props.keyBtn, src: this.props.link }),
      this.props.keyBtn));


  }}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMsg: "-----" };


    this.printMsg = this.printMsg.bind(this);
  }

  printMsg(msg = "-----") {
    this.setState({
      displayMsg: msg });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("h1", { id: "title" }, "MusicPad"), /*#__PURE__*/
      React.createElement("div", { class: "row" }, /*#__PURE__*/
      React.createElement("div", { id: "pads", class: "col-md-8" },
      pads.map((pad, i) => /*#__PURE__*/React.createElement(DrumPad, { name: pad.name, keyBtn: pad.key, btnCode: pad.keyCode, link: pad.link, displayMsg: this.printMsg }))), /*#__PURE__*/

      React.createElement("div", { id: "display", class: "col" },
      this.state.displayMsg)))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));