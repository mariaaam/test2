import React, { useState } from 'react'

export default function Portofolio() {
  let[data]=useState([
    { img:'image/poert1.png' ,id:"img1"},
    { img:'image/port2.png' ,id:"img1"},
    { img:'image/port3.png' ,id:"img1"},
    { img:'image/poert1.png' ,id:"img1"},
    { img:'image/port2.png' ,id:"img1"},
    { img:'image/port3.png' ,id:"img1"},
  ])
  return <>
  <section className='portofo vh-100 bg-white'>
    <h2>
    PORTFOLIO COMPONEN
    </h2>
    <div className="icon_proto">
    <i className="fa-solid fa-star"></i>

    </div>
    <div className="container">
      <div className="row gy-3">
        {data.map((imag)=>(
          <>
          <div className="col-md-4">
            <div className='position-relative contain'>
              <img src={imag.img} className='w-100 rounded-3' alt='port'/>
              <div className='pluse rounded-3'>
              <i className="fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
  </section>
  
  </>
}
