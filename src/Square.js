import React from 'react'

const Square = ({colors , textColor}) => {
  return (
    <div 
      className='square'
      style={{
        backgroundColor: colors,
        color: textColor ? '#fff' : '#000'
        }}>
    <h1>{colors ? colors.toUpperCase() : 'Empty Value'}</h1>
    </div>
  )
}

export default Square
