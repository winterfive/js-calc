const 

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultDisplay: "12,567",
      result: 0,
      num1: 0,
      num2: 0,
      input: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  clearAll() {    
    this.setState = ({
      resultDisplay: "0",
      result: 0,
      num1: 0,
      num2: 0,
      input: []
    });
  }

  calculate() {
    switch
    // switch statement
  }

  handleClick(x) {
    console.log(x);
    if(num1 == 0) {
      this.setState = ({
      num1: x
      });
    } else {
      this.setState = ({
        num2: x
      });
      calculate();
    }        
  }

  render() {
    return (
      <div>
        <div id="resultDiv">
          <div id="display">{this.state.resultDisplay}</div>
        </div>
        <div id="buttonDiv">
          <div>
            <div id="row1" className="row">
              <div id="seven" className="numButton" onClick={() => this.handleClick(7)}>
                7
              </div>
              <div id="eight" className="numButton" onClick={() => this.handleClick(8)}>
                8
              </div>
              <div id="nine" className="numButton" onClick={() => this.handleClick(9)}>
                9
              </div>
            </div>
            <div id="row2" className="row">
              <div id="four" className="numButton" onClick={() => this.handleClick(4)}>
                4
              </div>
              <div id="five" className="numButton" onClick={() => this.handleClick(5)}>
                5
              </div>
              <div id="six" className="numButton" onClick={() => this.handleClick(6)}>
                6
              </div>
            </div>
            <div id="row3" className="row">
              <div id="three" className="numButton" onClick={() => this.handleClick(3)}>
                3
              </div>
              <div id="two" className="numButton" onClick={() => this.handleClick(2)}>
                2
              </div>
              <div id="one" className="numButton" onClick={() => this.handleClick(1)}>
                1
              </div>
            </div>
            <div id="row4" className="row">
              <div id="clear" className="numButton" onClick={() => this.clearAll}>
                C
              </div>
              <div id="zero" className="numButton" onClick={() => this.handleClick(0)}>
                0
              </div>
              <div id="decimal" className="numButton" onClick={() => this.handleClick(1)}>
                .
              </div>
            </div>
          </div>
          <div id="opsDiv">
            <div id="divide" className="opsButton" onClick={this.handleClick}>
              <i class="fas fa-divide" />
            </div>
            <div id="multiply" className="opsButton" onClick={this.handleClick}>
              <i class="fas fa-times" />
            </div>
            <div id="subtract" className="opsButton" onClick={this.handleClick}>
              <i class="fas fa-minus" />
            </div>
            <div id="add" className="opsButton" onClick={this.handleClick}>
              <i class="fas fa-plus" />
            </div>
            <div id="equals" className="opsButton" onClick={this.handleClick}>
              <i class="fas fa-equals" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
