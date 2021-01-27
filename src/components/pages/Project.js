import React from 'react'
import Cards from '../Cards'
import '../../App.css'

export default function Project(){
  return(
    <>
      <div className="common">
        <div className="project">
          <div className="max-width">
            <h2 className="title">Projects</h2>
              <Cards/>
          </div>
        </div>
      </div>
    </>
  )
}


