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
          <div id="row1">
            <div id="seven">7</div>
            <div id="eight">8</div>
            <div id="nine">9</div>
          </div>
          <div id="row2">
            <div id="four">4</div>
            <div id="five">5</div>
            <div id="six">6</div>
          </div>
          <div id="row3">
            <div id="three">3</div>
            <div id="two">2</div>
            <div id="one">1</div>
          </div>
          <div id="row4">
            <div id="clear">C</div>
            <div id="zero">0</div>
            <div id="decimal">.</div>
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
