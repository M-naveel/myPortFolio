import React from 'react'

function Footer() {
  
    function getCopyrightYears(startYear){
  const currentYear = new Date().getFullYear();
  return startYear === currentYear ? `${currentYear}` : `${startYear} - ${currentYear}`;
}
  
    return (
    <>
    
    <footer>
        <div className="footer">

        <h3>
            Built with React • Designed & Developed by Muhammad Naveel © {getCopyrightYears(2025)}  — All Rights Reserved.

        </h3>
        </div>
    </footer>
    </>
    
  )
}

export default Footer
