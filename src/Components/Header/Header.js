import React from 'react'

function Header() {
  return (
    <div>
        <nav className="nav">
        <img
          src={process.env.PUBLIC_URL + "/images/huddle.svg"}
          alt="huddle interface"
        />
        </nav>
        
    </div>
  )
}

export default Header;