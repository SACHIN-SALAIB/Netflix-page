import React from 'react'
import './NavBar.css'

const Navbar = () => {

  return (
        <div ClassName="navbar">
    <div className="main"> 
    <img className="logo"src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" alt="Netflix.com"/>
    <img className="avatar"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTmEhaWwk-6aDtmOFsbYeIXHgy3zktad5cA&usqp=CAU" alt=""/>
    <input placeholder="Search" type="text" style={{marginLeft:650,marginTop:10,height:21}}/>
 
    </div>
       </div>
    
  )
}

export default Navbar