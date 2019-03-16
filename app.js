let currentNum = 0;

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
  }
  
  handleInput(input) {
    //console.log("input is: " + input + ", type of input: " + typeof input);
    
    if(!isNaN(input)) {
      this.handleNumber(input);      
    }
    else if(input === 'decimal') {
      this.handleDecimal();      
    } else {
      // input is operator
      this.handleOperator(input);           
    }
  }

  // Handles/displays numerical input
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
    
    console.log("# currentNum is: " + currentNum);
  }

  // Handles decimal input
  handleDecimal() {
    console.log("Dec Index " + currentNum.indexOf('.'));
    console.log("Bool " + currentNum.indexOf('.') === -1);
    if(currentNum.indexOf('.') === -1) {
      currentNum = currentNum + '.';
      this.setState({      
        displayNum: currentNum
      })
    }
    console.log(". currentNum is: " + currentNum);
  }
  
  storeOperand() {
    this.setState({
      num1: currentNum
    });
    if(haveFirstOperand === false) {
      haveFirstOperand = true;
    }    
    currentNum = 0;
    console.log("stored num1 is: " + this.state.num1);
  }
  
  /*
  handleNegPos() {
    currentNum = currentNum.charAt(0) === '-'? currentNum.substr(1) : "-" + currentNum 
  }
  */ 
  
  // Saves operator last selected by user
  // string -> void
  handleOperator(op) {
    console.log("op is: " + op + ", typof op is: " + typeof op);
    // this is not catching!!! TODO
    if(op === "equals") {
      this.displayResult();
    } else {
      this.setState({
        operator: op
      });
      if(haveFirstOperand === false) {
        this.storeOperand();
      } else {
        this.calculate();
      }            
    }    
  }
  
  displayResult() {
    this.setState({
      displayNum: result
    })
  }
  
  calculate() {
    console.log("c num1 is: " + this.state.num1);
    console.log("c currentNum is: " + currentNum);
    console.log("c operator is: " + this.state.operator);
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
