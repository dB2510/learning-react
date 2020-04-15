import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

    state = {
        name : 'Dhruv',
        age : 21
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    // handleChange() { // This will not work!! Because of state properties and this bindings in JS
    //     this.setState({name:'Nishtha'});
    // }

    handleChange = (e) => {
        this.setState({
            name : e.target.value
        });
    }

    render() {
        return (
            <div className="first-form">
                <h1>My name is {this.state.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button>Submit!!</button>
                </form>
            </div>
        );
    }
}

export default App