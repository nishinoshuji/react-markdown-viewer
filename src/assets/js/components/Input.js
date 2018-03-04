import React, { Component } from 'react';

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      plainText: '',
    }
  }
  onChangeValue(event) {
    this.setState({plainText : event.target.value});
  };
  onSubmitText() {
    this.props.updateText(this.state);
  };
  render() {
    return (
      <div className="input">
        <textarea
          value={this.state.textValue}
          onKeyDown={(e) => this.onChangeValue(e)}/>
        <button onClick={() => this.onSubmitText()}>submit</button>
      </div>
    )
  }
}
export default Input;
