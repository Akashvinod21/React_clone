import { faInstagram,faYoutube,faXTwitter,faTiktok,faDiscord } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
    <div className="container-fluid p-4 text-light" >
      <div className="row p-5" style={{backgroundColor:"black"}}>
        <div className="col-md-2">
         <div className='ms-2 p-5'>
            <h5>Products</h5>
            <p>Phone(2a)</p>
            <p>Phone(2)</p>
            <p>Ear(a)</p>
            <p>Ear</p>
            <p>Accessories</p>
            <p>Apparel</p>
         </div>
        </div>
        <div className="col-md-2">
          <div className='ms-2 p-5'>
            <h5>Company</h5>
            <p>About Us</p>
            <p>Careers</p>
            <p>Community</p>
            <p>Sustainability</p>
            <p>Business Enquiry</p>
            <p>Press Contact</p>
          </div>
        </div>
        <div className="col-md-2">
          <div  className='ms-2 p-5'>
            <h5>Support</h5>
            <p>Support Centre</p>
            <p>Contact Us</p>
            <p>Contact Us via Whatsapp</p>
            <p>Service Centre</p>
            <p>E-Waste Management</p>
            <p>Find a Store</p>
          </div>
        </div>
        <div className="col-md-6">
          <div  className='ms-2 p-5'>
            <h5>JOIN OUR MAILING LIST</h5>
            <input type="text" placeholder='EMAIL ADDRESS' className='form-control mt-5 border border-light text-light' style={{backgroundColor:"black"}}/>
          </div>
        </div>
      </div>
      <div className="row mt-1 p-5" style={{backgroundColor:"black"}}>
        <div className="col-md-6">
          <div className='d-md-flex justify-content-around'>
            <p>Privacy Policy</p>
            <p>Warranty Policy</p>
            <p>Acceptable Use Policy</p>
            <p>User Agreement</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className='d-md-flex justify-content-center'>
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faTiktok} />
          <FontAwesomeIcon icon={faDiscord} />
          </div>
        </div>
        <div className="col-md-3">
          <p><a href="India"></a>India</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer