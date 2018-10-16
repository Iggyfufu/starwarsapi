## Star Wars Code Project

This Star Wars Project uses the Star Wars API (https://swapi.co) where you can select a character from the Star Wars films and find out which movies they appeared in. Currently you can only select from _Luke Skywalker_, _Darth Vader_, _Obi-wan Kenobi_, and _R2-D2_ due to the objectives of the project.
 - Allow users to select a character provided from the project.
 - Display the films the character appears in.
 - Use any js framework.
 - Don't load the films data until the character is selected.
 - Handle HTTP errors.

### Installation
 - Fork and clone repo
 - `npm install`
 - `npm start`
 - Automatically opens to localhost:3000

### Libraries Used
 - Create React App
 - Axios
 - Jest (Testing)
 - Enzyme (Testing)

### Deployed
Check out the project at: https://star-warsapi.herokuapp.com/

#### Challenges
Learned about error boundaries to handle HTTP errors.
```class ErrorBoundary extends Component {
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
  render() {
    if(this.state.errorInfo) {
      return (
        <div>
          {this.state.errorInfo}
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary;
```

This component has a special lifehook called componentDidCatch where in it listens to errors thrown by it's children and if there is any it will render the jsx in the if statement `if(this.state.errorInfo)`
Also started using the new static lifecycle method getDerivedStateFromProps.
