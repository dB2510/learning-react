import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    // That's how we update parent's state through passing function as a props 
    // And then passing the update that is to be performed through that function
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addNinja(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={ this.handleChange } />
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={ this.handleChange } />
                    <label htmlFor="name">Belt:</label>
                    <input type="text" id="belt" onChange={ this.handleChange } />
                    <button>Submit</button>

                </form>
            </div>
        )
    }
}

export default AddNinja