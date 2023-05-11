import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show,setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>570) {
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
    })

  return (
    <div className={`nav ${show && 'blackNav'}`}>
        <img
        style={{width:'150px'}}
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" />
    </div>
  )
}

export default Nav