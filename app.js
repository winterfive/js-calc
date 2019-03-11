class MyApp extends React.Component {
  constructor(props) {
    super(props); {
      this.state = {
        result: 0,
        num: 0,
        input: []
      }
    }
  }
  
  clearAll() {
    
  }
  
  calculate() {
    // switch statement
  }
  
  
  
  render() {
    return (
      <div>
        <div id="numPanel">
          <div id="row1" class="row">
            <div id="seven" class="numButton">7</div>
            <div id="eight" class="numButton">8</div>
            <div id="nine" class="numButton">9</div>
          </div>
          <div id="row2" class="row">
            <div id="four" class="numButton">4</div>
            <div id="five" class="numButton">5</div>
            <div id="six" class="numButton">6</div>
          </div>
          <div id="row3" class="row">
            <div id="three" class="numButton">3</div>
            <div id="two" class="numButton">2</div>
            <div id="one" class="numButton">1</div>
          </div>
          <div id="row4" class="row">
            <div id="clear" class="numButton">C</div>
            <div id="zero" class="numButton">0</div>
            <div id="decimal" class="numButton">.</div>
          </div>      
        </div>
        <div id="col">
          <div id="divide"><i class="fas fa-divide"></i></div>
          <div id="multiply"><i class="fas fa-times"></i></div>
          <div id="subtract"><i class="fas fa-minus"></i></div>
          <div id="add"><i class="fas fa-plus"></i></div>
          <div id="equals"><i class="fas fa-equals"></i></div>
          </div> 
      </div>
    )
  }
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
