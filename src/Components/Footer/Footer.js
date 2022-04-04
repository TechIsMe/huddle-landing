import React from 'react'

function Footer() {

  // const social = "fab fa-twitter";


  return (

    <div className='Footer'>

<ul className="social-links">
          <li>
            <a href="fab fa-twitter">
              {/* <li>${props.social.fabfatwitter}</li> */}
            </a>
          </li>
          <li>
            <a href="fab fa-twitter">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="fab fa-twitter">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
    </div>
  )
}

export default Footer;