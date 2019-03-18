let currentNum, result = 0;
let num1Locked, num2Locked, opLocked, hasDecimal = false;

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNum: 0,
      num1: 0,
      num2: 0,
      operator: ""
    };   
  }

  clearAll() {    
    this.setState({
      displayNum: 0,
      num1: 0,
      num2: 0,
      operator: ""
    });
    currentNum = 0;
    result = 0;
    num1Locked = false;
    num2Locked = false;
    opLocked = false;
    hasDecimal = false;
  }
  
  handleInput(input) {
    if(!isNaN(input)) {
      console.log("handleInput: number");
      this.handleNumber(input);      
    }
    else if(input === 'decimal') {
      console.log("handleInput: decimal");
      this.handleDecimal();      
    } else {
      // input is operator
      console.log("handleInput: op");
      this.handleOperator(input);           
    }
  }

  // Displays numerical input
  // int -> void
  handleNumber(digit) {
    // Operands limited to 20 places
    if(currentNum.length >= 20) {
      alert("Operand length limited to 20 places.");
    } 
    // Doesn't allow multiple 0s in display
    else if(digit === 0 && currentNum === 0) {
        currentNum = 0;
    } else {
      currentNum = currentNum === 0? String(digit) : currentNum + digit; 
    }    
    
    this.setState({
      displayNum: currentNum
    });
  }

  // Handles decimal input
  handleDecimal() {
    if(!hasDecimal) {
      currentNum = currentNum + '.';
      this.setState({      
        displayNum: currentNum
      })
    }
    hasDecimal = true;
  }
  
  /*
  handleNegPos() {
    currentNum = currentNum.charAt(0) === '-'? currentNum.substr(1) : "-" + currentNum 
  }
  */ 
  
  // Saves operator last selected by user
  // string -> void
  handleOperator(op) {        
    if(op === "equals") {
      this.displayResult();
    } else {
      // user selected +, -, /, or x
      this.setState({
        operator: op
      });
      
      // if we have two operands
      if(num1Locked) {
        this.calculate();
      } else {
        // store first operand
        this.setState({
          num1: currentNum
        });
        num1Locked = true;
        currentNum = 0;
      }            
    }
    // reset hasDecimal
    hasDecimal = false;
  }
  
  displayResult() {
    this.setState({
      displayNum: result
    })
  }
  
  calculate() {
    switch(this.state.operator) {
      case "divide":
        result = this.state.num1 / currentNum;
        break;
      case "times":
        result = this.state.num1 * currentNum;
        break;
      case "minus":
        result = this.state.num1 - currentNum;
        break;
      case "plus":
        result = parseFloat(this.state.num1) + parseFloat(currentNum);
        break;
      default:
        break;
    }
    this.setState({
      num1: result
    })
    currentNum = 0;
    this.displayResult();
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
              <div id="seven" className="numButton" onClick={() => this.handleInput(7)}>
                7
              </div>
              <div id="eight" className="numButton" onClick={() => this.handleInput(8)}>
                8
              </div>
              <div id="nine" className="numButton" onClick={() => this.handleInput(9)}>
                9
              </div>
            </div>
            <div id="row2" className="row">
              <div id="four" className="numButton" onClick={() => this.handleInput(4)}>
                4
              </div>
              <div id="five" className="numButton" onClick={() => this.handleInput(5)}>
                5
              </div>
              <div id="six" className="numButton" onClick={() => this.handleInput(6)}>
                6
              </div>
            </div>
            <div id="row3" className="row">
              <div id="three" className="numButton" onClick={() => this.handleInput(3)}>
                3
              </div>
              <div id="two" className="numButton" onClick={() => this.handleInput(2)}>
                2
              </div>
              <div id="one" className="numButton" onClick={() => this.handleInput(1)}>
                1
              </div>
            </div>
            <div id="row4" className="row">
              <div id="clear" className="numButton" onClick={() => this.clearAll()}>
                C
              </div>
              <div id="zero" className="numButton" onClick={() => this.handleInput(0)}>
                0
              </div>
              <div id="decimal" className="numButton" onClick={() => this.handleInput('decimal')}>
                .
              </div>
            </div>
          </div>
          <div id="opsDiv">
            <div id="divide" className="opsButton" onClick={() => this.handleInput('divide')}>
              <i class="fas fa-divide" />
            </div>
            <div id="multiply" className="opsButton" onClick={() => this.handleInput('times')}>
              <i class="fas fa-times" />
            </div>
            <div id="subtract" className="opsButton" onClick={() => this.handleInput('minus')}>
              <i class="fas fa-minus" />
            </div>
            <div id="add" className="opsButton" onClick={() => this.handleInput('plus')}>
              <i class="fas fa-plus" />
            </div>
            <div id="equals" className="opsButton" onClick={() => this.handleInput('equals')}>
              <i class="fas fa-equals" />=
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
