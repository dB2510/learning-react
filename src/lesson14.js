import React from 'react';
import ReactDOM from 'react-dom'

class Ninjas extends React.Component {
    render() {
        const { ninjas } = this.props;
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                </div>
            )
        })
        
        return (
            <div className="ninja-list">
                 { ninjaList }
            </div>
        )
    }
}


class App extends React.Component {
    state = {
        ninjas : [
            { name: 'Nishtha', age: 18, belt: 'black', id: 1},
            { name: 'Jyotsna', age: 11, belt: 'green', id: 2},
            { name: 'Dhruv', age: 21, belt: 'brown', id: 3}
        ]
    }
    render() {
        return (
            <div className="App">
                <h1>My first React app!</h1>
                <p>Welcome :)</p>
                <Ninjas ninjas = {this.state.ninjas}/>
            </div>
        );
    }
}

export default App