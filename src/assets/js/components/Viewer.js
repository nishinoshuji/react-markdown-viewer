import React, { Component } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import 'github-markdown-css/github-markdown.css';

class Viewer extends Component {
  componentDidUpdate(){
    this.refs.markedArea.innerHTML = marked(this.props.plainText);
  };
  render() {
    return (
      <div ref="markedArea" className="markdown-body viewer">
      </div>
    )
  }
}
Viewer.propTypes = {
  plainText: PropTypes.string
}
export default Viewer;
