import React from 'react'

const TextInput = ({color, setColor, textColor, setTextColor}) => {
  return (
    <div className = 'textInput'>
        <form onSubmit={(e) => e.preventDefault()}>
            <input 
                className = 'input'
                placeholder = 'Add Color'
                value = {color}
                onChange = {(e) => setColor(e.target.value)}
            />
            <button
                className = 'btn'
                onClick = {() => {setTextColor(!textColor)}}
            >
                Toggle Text Color
            </button>
        </form>
    </div>
  )
}

export default TextInput






























