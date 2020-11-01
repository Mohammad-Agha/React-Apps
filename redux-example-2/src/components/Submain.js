import React from 'react'
import { useSelector } from 'react-redux'

const Submain = () => {
  const counter = useSelector(state => state.num)
  const text = useSelector(state => state.text)
  return (
    <div>
      {counter} {text}
    </div>
  )
}

export default Submain