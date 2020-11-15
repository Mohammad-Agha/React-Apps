import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const App = () => {
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [perPage, setPerPage] = useState(5)
  const [pageCount, setPageCount] = useState(0)

  useEffect(() => {
    getData()
  }, [offset])

  const getData = async () => {

    const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
    const json = await response.json()
    const paginate = json.slice(offset, offset + perPage)
    const postData = paginate.map((data, index) => (
      <div key={index}>
        <p>{data.title}</p>
        <img src={data.thumbnailUrl} alt="Image" />
      </div>
    ))
    setData(postData)
    setPageCount(Math.ceil(json.length / perPage))
  }

  const handlePageClick = (e) => {
    const selectedPage = e.selected
    setOffset(selectedPage + 1)
  }

  return (
    <div>
      <div style={{ display: "flex" }}>
        {data}
      </div>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div >
  )
}

export default App