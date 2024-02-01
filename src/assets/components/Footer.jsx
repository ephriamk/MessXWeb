import React from 'react';
import '../styles/Footer.css';
import img1 from '../../../public/dakotaLithium.png';
import img2 from '../../../public/UWCI.png';
import img4 from '../../../public/foodprintproject.png';
import img5 from '../../../public/ASES_SOLAR22.png';
import img6 from '../../../public/A&RSolar.png';





function Footer() {

  
  
  
  return (
    <footer className="footers">
      <h2 className='sponsors'>Our Sponsors!</h2>
      <div className='tag-list scroller__inner'>
        <img src={img2}></img>
        <img src={img4}></img>
        <img src={img5}></img>
        <img src={img6}></img>
      </div>
      <p className='footerp'>&copy; {new Date().getFullYear()} MESSX. All rights reserved.</p>
      
    </footer>
  );
}

export default Footer;
