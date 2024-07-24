import React, { useState } from 'react'
import Square from './Square'
import TextInput from './TextInput'

const App = () => {

  const [colors , setColor] = useState('')
  const [textColor , setTextColor] = useState('')

  return (
    <div 
      className = 'mainbox'
    >
      <Square 
        colors = {colors}
        textColor = {textColor}
      />
      <TextInput 
        colors = {colors}
        setColor = {setColor}
        textColor = {textColor}
        setTextColor = {setTextColor}
      />
    </div>
  )
}

export default App
