import React, { useState } from 'react';

function ColorForm(props) {
    let [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault() //Prevent the default behavior of a Sumbit Action
        props.addColor(input) //Add stateful input variable to outside function that uses a stateful color array! 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>Submit!</button>
            </form>
        </div>
    )
}

export default ColorForm;