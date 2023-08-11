import React from 'react'
import './HorizontalScrollingText.css'
const HorizontalScrollingText = (props) => {
  return (
    <div className="scroll-container">
      <div className="scroll-text">
      {props.text}
      </div>
    </div>
  )
}

export default HorizontalScrollingText