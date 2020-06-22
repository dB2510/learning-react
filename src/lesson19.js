import React, {Component} from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {
    // const { ninjas } = ninjas;
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>Belt: { ninja.belt }</div>
                {/* To avoid automatic invoking the function we need to add this in another function */}
                <button onClick={() => {deleteNinja(ninja.id)}}>Delete ninja</button>
            </div>
        )
    })
    
    return (
        <div className="ninja-list">
            { ninjaList }
        </div>
    )
}

export default Ninjas