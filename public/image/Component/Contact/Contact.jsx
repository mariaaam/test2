import React from 'react'

export default function Contact() {
  return (
    <>
    <section className='contact vh-100 d-flex justify-content-center align-items-center  bg-white'>
    
<div className='container w-50'>


<h2 className='mb-5 text-center'>
CONATCT SECTION

</h2>
<div className="icon_proto">
    <i className="fa-solid fa-star"></i>

    </div>

<form>
  
    <input type="text" 
    className="form-control mb-5 border-0  border-bottom  rounded-0 form-control-lg  w-100 "  placeholder='User Name' />

    <input type="number" className="form-control mb-5 border-0 form-control-lg border-bottom rounded-0 form-control-lg " placeholder='User Age'/>

    <input type="email" className="form-control mb-5 border-0 form-control-lg border-bottom rounded-0 form-control-lg " placeholder='User Name' />
    <input type="password" className="form-control mb-5 border-0 border-bottom rounded-0 " id="exampleInputPassword1"  placeholder='User password'/>
  
  <button type="submit" className="btn btn-primary rounded-2  ">Send Message</button>
</form></div>
 </section> 
    </>
  )
}
