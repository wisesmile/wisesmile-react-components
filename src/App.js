import React from 'react'
import YourComponent from 'components/YourComponent'
import Alert from 'components/Alert'
import About from 'components/About'


class App extends React.Component {
  render() {
    return (
      <div id="test">
        <Alert />
        <YourComponent>1</YourComponent>
        <About name="test" version="1.0" />
      </div>
    )
  }
}

export default App
