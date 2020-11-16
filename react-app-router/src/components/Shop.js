import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Shop = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const data = await response.json()
    setItems(data)
  }

  return (
    <div>
      {items.map((item, index) =>
        <h1 key={index}>
          <Link to={`/shop/${index + 1}`}>{item.title}</Link>
        </h1>
      )}
    </div>
  )
}

export default Shop