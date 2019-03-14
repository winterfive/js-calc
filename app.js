let currentNum = 0;
let haveOperator = false;
let haveFirstOperand = false;

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayNum: 0,
      num1: 0,
      num2: 0,
      operator: ""
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.assignFirstOperand = this.assignFirstOperand.bind(this);
    this.applyMath = this.applyMath.bind(this);
  }

  clearAll() {    
    this.setState({
      displayNum: 0,
      num1: 0,
      num2: 0,
      operator: ""
    });
    currentNum = 0;
    haveOperator = false;
    haveFirstOperand = false;
  }

  calculate() {
    // switch statement TODO
  }

  // Handles numerical input
  // int -> void
  handleNumber(digit) {
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
    })
  }
  
  // Handles decimal input
  // void -> void
  handleDot() {
    if(currentNum.indexOf('.') === -1) {
      currentNum = currentNum + '.';
      this.setState({      
        displayNum: currentNum
      });       
    }    
  }
  
  /*
  handleNegPos() {
    currentNum = currentNum.charAt(0) === '-'? currentNum.substr(1) : "-" + currentNum 
  }
  */ 
  
  // Saves operator last selected by user
  // string -> void
  handleOperator(op) {
    if(op === 'equals') {
      this.applyMath();
    } else {
      this.setState({
        operator: op
      });
      haveOperator = true;
      this.assignFirstOperand();
    }
  }
  
  // Changes num1 state once an operator is selected
  // void -> void  
  assignFirstOperand() {
    // haveOperator handles user selecting several operators 
    if(haveFirstOperand === false) {
      this.setState({
        num1: currentNum 
      });
      haveFirstOperand = true;
      currentNum = 0;
    }
  }
  
  applyMath() {
    let result = 0;
    
    if(haveOperator) {
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
          result = this.state.num1 + currentNum;
          break;
        default:
          break;
      }      
    }
    console.log("result is: " + result);
    this.setState({
      displayNum: result
    })
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
              <div id="seven" className="numButton" onClick={() => this.handleNumber(7)}>
                7
              </div>
              <div id="eight" className="numButton" onClick={() => this.handleNumber(8)}>
                8
              </div>
              <div id="nine" className="numButton" onClick={() => this.handleNumber(9)}>
                9
              </div>
            </div>
            <div id="row2" className="row">
              <div id="four" className="numButton" onClick={() => this.handleNumber(4)}>
                4
              </div>
              <div id="five" className="numButton" onClick={() => this.handleNumber(5)}>
                5
              </div>
              <div id="six" className="numButton" onClick={() => this.handleNumber(6)}>
                6
              </div>
            </div>
            <div id="row3" className="row">
              <div id="three" className="numButton" onClick={() => this.handleNumber(3)}>
                3
              </div>
              <div id="two" className="numButton" onClick={() => this.handleNumber(2)}>
                2
              </div>
              <div id="one" className="numButton" onClick={() => this.handleNumber(1)}>
                1
              </div>
            </div>
            <div id="row4" className="row">
              <div id="clear" className="numButton" onClick={() => this.clearAll()}>
                C
              </div>
              <div id="zero" className="numButton" onClick={() => this.handleNumber(0)}>
                0
              </div>
              <div id="decimal" className="numButton" onClick={() => this.handleDot()}>
                .
              </div>
            </div>
          </div>
          <div id="opsDiv">
            <div id="divide" className="opsButton" onClick={() => this.handleOperator('divide')}>
              <i class="fas fa-divide" />
            </div>
            <div id="multiply" className="opsButton" onClick={() => this.handleOperator('times')}>
              <i class="fas fa-times" />
            </div>
            <div id="subtract" className="opsButton" onClick={() => this.handleOperator('minus')}>
              <i class="fas fa-minus" />
            </div>
            <div id="add" className="opsButton" onClick={() => this.handleOperator('plus')}>
              <i class="fas fa-plus" />
            </div>
            <div id="equals" className="opsButton" onClick={() => this.handleOperator('equals')}>
              <i class="fas fa-equals" />=
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
