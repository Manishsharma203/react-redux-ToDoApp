import React from 'react';
import './App.css';
import Todo from './components/Todo';
import { AppBar, Toolbar} from '@material-ui/core'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputText: ''
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <AppBar position="static">
            <Toolbar >
                <p className='heading my-2 ml-2'>To-Do App</p>
            </Toolbar>
          </AppBar>
          <div className='my-5'></div>
          <Todo />
        </div>
      </div>
    )
  }

}


export default App
