class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultDisplay: "12,567",
      result: 0,
      num: 0,
      input: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  clearAll() {}

  calculate() {
    // switch statement
  }

  handleClick() {}

  render() {
    return (
      <div>
        <div id="resultDiv">
          <div id="display">{this.state.resultDisplay}</div>
        </div>
        <div id="buttonDiv">
          <div>
            <div id="row1" class="row">
              <div id="seven" class="numButton" onClick={this.handleClick}>
                7
              </div>
              <div id="eight" class="numButton" onClick={this.handleClick}>
                8
              </div>
              <div id="nine" class="numButton" onClick={this.handleClick}>
                9
              </div>
            </div>
            <div id="row2" class="row">
              <div id="four" class="numButton" onClick={this.handleClick}>
                4
              </div>
              <div id="five" class="numButton" onClick={this.handleClick}>
                5
              </div>
              <div id="six" class="numButton" onClick={this.handleClick}>
                6
              </div>
            </div>
            <div id="row3" class="row">
              <div id="three" class="numButton" onClick={this.handleClick}>
                3
              </div>
              <div id="two" class="numButton" onClick={this.handleClick}>
                2
              </div>
              <div id="one" class="numButton" onClick={this.handleClick}>
                1
              </div>
            </div>
            <div id="row4" class="row">
              <div id="clear" class="numButton" onClick={this.handleClick}>
                C
              </div>
              <div id="zero" class="numButton" onClick={this.handleClick}>
                0
              </div>
              <div id="decimal" class="numButton" onClick={this.handleClick}>
                .
              </div>
            </div>
          </div>
          <div id="opsDiv">
            <div id="divide" class="opsButton" onClick={this.handleClick}>
              <i class="fas fa-divide" />
            </div>
            <div id="multiply" class="opsButton" onClick={this.handleClick}>
              <i class="fas fa-times" />
            </div>
            <div id="subtract" class="opsButton" onClick={this.handleClick}>
              <i class="fas fa-minus" />
            </div>
            <div id="add" class="opsButton" onClick={this.handleClick}>
              <i class="fas fa-plus" />
            </div>
            <div id="equals" class="opsButton" onClick={this.handleClick}>
              <i class="fas fa-equals" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
