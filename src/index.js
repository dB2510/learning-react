import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Ninjas from './lesson19.js'
import AddNinja from './lesson18.js'

class App extends Component {
  state = {
    ninjas : [
      { name: 'Nishtha', age: 18, belt: 'black', id: 1 },
      { name: 'Jyotsna', age: 11, belt: 'green', id: 2 },
      { name: 'Dhruv', age: 21, belt: 'brown', id: 3 }
    ]
  }
  // Lesson 18
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas : ninjas
    })
  }

  // Lesson 19
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return id !== ninja.id 
    });
    console.log(id);
    this.setState({
      ninjas: ninjas
    })
  }

  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome :)</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>

    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

