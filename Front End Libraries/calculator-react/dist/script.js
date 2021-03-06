class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formula: '0',
      newNum: true };


    this.reset = this.reset.bind(this);
    this.numbers = this.numbers.bind(this);
    this.noNumber = this.noNumber.bind(this);
    this.equal = this.equal.bind(this);
  }

  equal() {
    let formula = this.state.formula;
    formula = formula.split(' ').filter(x => x != '');

    console.log(formula);
    let sign = '+';
    let result = 0;

    for (let i = 0; i < formula.length; ++i) {
      if (/\d+.*\d*/.test(formula[i])) {
        let x = formula[i].split('.').filter(x => x != '');
        x = x[0] + '.' + x.slice(1, x.length).join('');
        console.log(x);
        let num = parseFloat(x);
        switch (sign) {
          case '+':
            result += num;break;
          case '*':
            result *= num;break;
          case '/':
            result /= num;break;
          case '-':
            result -= num;break;}

      } else {
        if (formula[i] == '-' && i < formula.length - 1 && /\d+.*\d*/.test(formula[i + 1])) {
          formula[i + 1] = '-' + formula[i + 1];
          if (/\d+.*\d*/.test(formula[i - 1]))
          sign = '+';
        } else {
          sign = formula[i];
        }

      }
    }
    console.log(result);
    this.setState({
      formula: result.toString(),
      newNum: false });

  }

  noNumber(event) {
    this.setState({
      formula: event.target.value == '.' ? this.state.newNum ? this.state.formula.concat(event.target.value) : this.state.formula : this.state.formula.concat(" " + event.target.value + " "),
      newNum: event.target.value != '.' });

  }

  numbers(event) {
    this.setState({
      formula: this.state.formula == '0' ? event.target.value : this.state.formula.concat(event.target.value),
      newNum: this.state.newNum });

  }

  reset() {
    this.setState({
      formula: '0',
      newNum: true });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "wrapper" }, /*#__PURE__*/
      React.createElement("div", { id: "display" },
      this.state.formula), /*#__PURE__*/

      React.createElement("div", { class: "buttons" }, /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default large", value: "AC", onClick: this.reset, id: "clear" }, "AC"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "/", onClick: this.noNumber, id: "divide" }, "/"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "*", onClick: this.noNumber, id: "multiply" }, "x"), /*#__PURE__*/

      React.createElement("button", { class: "btn btn-default", value: "7", onClick: this.numbers, id: "seven" }, "7"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "8", onClick: this.numbers, id: "eight" }, "8"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "9", onClick: this.numbers, id: "nine" }, "9"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "-", onClick: this.noNumber, id: "subtract" }, "-"), /*#__PURE__*/

      React.createElement("button", { class: "btn btn-default", value: "4", onClick: this.numbers, id: "four" }, "4"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "5", onClick: this.numbers, id: "five" }, "5"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "6", onClick: this.numbers, id: "six" }, "6"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "+", onClick: this.noNumber, id: "add" }, "+"), /*#__PURE__*/

      React.createElement("button", { class: "btn btn-default", value: "1", onClick: this.numbers, id: "one" }, "1"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "2", onClick: this.numbers, id: "two" }, "2"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "3", onClick: this.numbers, id: "three" }, "3"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: "=", onClick: this.equal, id: "equals" }, "="), /*#__PURE__*/

      React.createElement("button", { class: "btn btn-default large", value: "0", onClick: this.numbers, id: "zero" }, "0"), /*#__PURE__*/
      React.createElement("button", { class: "btn btn-default", value: ".", onClick: this.noNumber, id: "decimal" }, "."))));



  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));