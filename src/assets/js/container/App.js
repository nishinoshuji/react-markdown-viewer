import React, { Component } from 'react';
import Input from '../components/Input';
import Viewer from '../components/Viewer';
import 'reset-css/reset.css';
import '../../scss/index.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plainText: '',
    };
  };
  updateText(state){
    this.setState(state);
  };
  render() {
    return (
      <div class="page-wrap">
        <Input updateText={this.updateText.bind(this)}/>
        <Viewer plainText={this.state.plainText}/>
      </div>
    )
  }
}
export default App;
