import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'

const App = () => {
  const [offset, setOffset] = useState(0)
  const [data, setData] = useState([])
  const [perPage, setPerPage] = useState(3)
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    getData(`http://localhost:5000/users?page=${offset + 1}&limit=${perPage}`)
  }, [offset])

  const getData = async url => {
    const response = await fetch(url)
    const json = await response.json()
    // const paginate = json.slice(offset, offset + perPage)

    const postData = json.results.map((data, index) => (
      <div key={index}>
        <p>{data.id}</p>
        <p>{data.name}</p>
      </div>
    ))
    setData(postData)
    setPageCount(Math.ceil(json.total / perPage))
  }

  const handlePageClick = (e) => setOffset(e.selected)

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