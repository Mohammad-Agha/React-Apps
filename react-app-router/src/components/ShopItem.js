import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ShopItem = ({ match }) => {
  const [item, setItem] = useState([])

  useEffect(() => {
    fetchItem()
  }, [])

  const fetchItem = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`)
    const data = await response.json()
    setItem(data)
  }

  return (
    <div>
      <h1>Item</h1>
      <h2>{item.title}</h2>
    </div>
  )
}

export default ShopItem