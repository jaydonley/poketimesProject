import React from 'react'

const Rainbow = (WrappedComponent) => {

const colors = ['white', 'yellow', 'green', 'purple', 'red', 'orange'];

const randomColors = colors[Math.floor(Math.random() * 5)];

const className = randomColors + '-text'


return (props) => {
  return (
    <div className={className}>
        <WrappedComponent {...props} />
    </div>
  )
}
}
export default Rainbow