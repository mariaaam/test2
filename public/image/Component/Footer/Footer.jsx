import React from 'react'

export default function Footer() {
  return <>
  
    <footer className=' '>
      <div className='container py-5 text-white text-center '>
         <div className='row'>
         <div className='col-md-4'>
          <h3 className='fw-bold mb-3'> LOCATION </h3>
          <p className='mb-2'>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
         </div>
         <div className='col-md-4'>

          <h3 className='fw-bold mb-3'>
          Clark, MO 65243


          </h3>
          <div className=' d-flex justify-content-center align-items-center '>
            <div  className='icon d-flex justify-content-center align-items-center me-3'>
            <i className="fa-brands fa-facebook fa-xl"></i>
            </div>

            <div className='icon d-flex justify-content-center align-items-center me-3'>
            <i className="fa-brands fa-twitter  fa-xl "></i>
            </div>

            <div className='icon d-flex justify-content-center align-items-center me-3'>
            <i className="fa-brands fa-linkedin-in fa-xl"></i>
            </div>

            <div className='icon d-flex justify-content-center align-items-center me-3'>
            <i className="fa-brands fa-dribbble fa-xl"></i>       
                 </div>

          </div>
         </div>

         <div className='col-md-4'>
          <h3 className='fw-bold mb-3'>ABOUT FREELANCER
</h3>
<p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
         </div>
        </div>
      </div>
        <div className='footer text-center text-white py-4 fw-bold'>
          <p>Copyright © Your Website 2021 </p>
        </div>
    

    </footer>
  
  
  </>
    
  
}