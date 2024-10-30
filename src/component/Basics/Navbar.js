import React from 'react'

const Navbar = ({filteritems, propList}) => {
  return (
    <>
    <nav className="navbar">
        <div className="btn-group">
          {
            propList.map((curElem) => {
              return (<button className="btn-group__item"
              onClick={() => filteritems(curElem)}>
              {curElem}
            </button>)
            })
          }
                   
        </div>
      </nav>
    </>
  )
}

export default Navbar