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
          <h2>Something went wrong</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </details>
          <button onClick={this.resetError}>Select another character</button>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary;