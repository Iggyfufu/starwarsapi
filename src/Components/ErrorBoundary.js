import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  resetError = () => {
    this.setState({
      error: null,
      errorInfo: null
    })
  }

  render() {
    
    if(this.state.errorInfo) {
      return (
        <div>
          <h2 className="error-header">Oops!</h2>
          <h3 className="error-header"> We can't seem to find the movies for the character you've selected.</h3>
          <details className="error-header">{this.state.error.toString()}</details>
          <button className="reset-button" onClick={this.resetError}>Select another character</button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary;