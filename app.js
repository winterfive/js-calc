// JS Calculator
// by Lee Gainer
// March/April 2019
// GitHub: https://github.com/winterfive/jscalc


let currentNum = 0;
let num1 = 0;
let result = 0;
let hasDecimal = false;
let num1Entered = false;
let operator = '';

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNum: 0
    };
  }

  clearAll() {
    this.setState({
      displayNum: 0
    })
    currentNum = 0;
    num1 = 0;
    result = 0;
    hasDecimal = false;
    num1Entered = false;
    operator = '';    
  }

  // Handles initial input by user
  // string or number -> void
  handleInput(input) {
    // input is number
    if (!isNaN(input)) {
      this.handleNumber(input);
      // input is decimal
    } else if (input === "decimal") {
      this.handleDecimal();
    } else {
      // input is an operator
      this.handleOperator(input);
    }
  }

  // Displays numerical input
  // number -> void
  handleNumber(digit) {
    // Operands limited to 20 places
    if (currentNum.length >= 20) {
      alert("Operand length limited to 20 places.");
    } else if (digit === 0 && currentNum === 0) {
      // Doesn't allow multiple 0s in display
      currentNum = 0;
    } else {
      currentNum = currentNum === 0 ? String(digit) : currentNum + digit;
    }

    this.setState({
      displayNum: currentNum
    });
  }

  // Handles decimal input
  // void -> void
  handleDecimal() {
    if (!hasDecimal) {
      currentNum = currentNum + ".";
      this.setState({
        displayNum: currentNum
      });
    }
    hasDecimal = true;
  }

  // Handles operator input
  // string -> void
  handleOperator(op) {
    op === 'equals' || num1Entered ? this.calculate() : this.setForNextNumber();    
    operator = op; 
  }
  
  
  // Sets up state for entry of next operand
  // void -> void
  setForNextNumber() {
    // have two operands been entered?
    if(!num1Entered) {
      num1Entered = true;
      num1 = currentNum;
      currentNum = 0;
    }       
    hasDecimal = false;
  }
  
  // Calculates num1 and currentNum using stored operator
  // void -> void
  calculate() {
    if(currentNum !== 0) {
      switch(operator) {
      case "divide":
        result = num1 / currentNum;
        break;
      case "times":
        result = num1 * currentNum;
        break;
      case "minus":
        result = num1 - currentNum;
        break;
      default:
        // adding operands
        result = parseFloat(num1) + parseFloat(currentNum);
        break;
      } 
      
      // round result if over 20 places
    if(result.length > 20) {
      result = +result.toFixed(20);
    }
    
    this.setState({
      displayNum: result
    })
    num1 = result;
    currentNum = 0;
    }
  }

  render() {
    return (
      <div>
        <div id="displayNumDiv">
          <div id="display">{this.state.displayNum}</div>
        </div>
        <div id="buttonDiv">
          <div>
            <div id="row1" className="row">
              <div
                id="seven"
                className="numButton"
                onClick={() => this.handleInput(7)}
              >
                7
              </div>
              <div
                id="eight"
                className="numButton"
                onClick={() => this.handleInput(8)}
              >
                8
              </div>
              <div
                id="nine"
                className="numButton"
                onClick={() => this.handleInput(9)}
              >
                9
              </div>
            </div>
            <div id="row2" className="row">
              <div
                id="four"
                className="numButton"
                onClick={() => this.handleInput(4)}
              >
                4
              </div>
              <div
                id="five"
                className="numButton"
                onClick={() => this.handleInput(5)}
              >
                5
              </div>
              <div
                id="six"
                className="numButton"
                onClick={() => this.handleInput(6)}
              >
                6
              </div>
            </div>
            <div id="row3" className="row">
              <div
                id="three"
                className="numButton"
                onClick={() => this.handleInput(3)}
              >
                3
              </div>
              <div
                id="two"
                className="numButton"
                onClick={() => this.handleInput(2)}
              >
                2
              </div>
              <div
                id="one"
                className="numButton"
                onClick={() => this.handleInput(1)}
              >
                1
              </div>
            </div>
            <div id="row4" className="row">
              <div
                id="clear"
                className="numButton"
                onClick={() => this.clearAll()}
              >
                C
              </div>
              <div
                id="zero"
                className="numButton"
                onClick={() => this.handleInput(0)}
              >
                0
              </div>
              <div
                id="decimal"
                className="numButton"
                onClick={() => this.handleInput("decimal")}
              >
                .
              </div>
            </div>
          </div>
          <div id="opsDiv">
            <div
              id="divide"
              className="opsButton"
              onClick={() => this.handleInput("divide")}
            >
              <i class="fas fa-divide" />
            </div>
            <div
              id="multiply"
              className="opsButton"
              onClick={() => this.handleInput("times")}
            >
              <i class="fas fa-times" />
            </div>
            <div
              id="subtract"
              className="opsButton"
              onClick={() => this.handleInput("minus")}
            >
              <i class="fas fa-minus" />
            </div>
            <div
              id="add"
              className="opsButton"
              onClick={() => this.handleInput("plus")}
            >
              <i class="fas fa-plus" />
            </div>
            <div
              id="equals"
              className="equalsButton"
              onClick={() => this.handleInput("equals")}
            >
              <i class="fas fa-equals" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
