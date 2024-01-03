import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Navbar from './Navbar/Navbar';



const Header: React.FC = () => {
 return (
   <header>
     <div className="nav-area">
       <a href="/" className="logo">
         Logo
       </a>
       <Navbar>sample navbar</Navbar>
     </div>
     <Carousel>
       <div>
         <img src="images/image1.jpg" alt="Image 1" />
         <p className="legend">Legend 1</p>
       </div>
       <div>
         <img src="images/image2.jpg" alt="Image 2" />
         <p className="legend">Legend 2</p>
       </div>
       <div>
         <img src="images/image3.jpg" alt="Image 3" />
         <p className="legend">Legend 3</p>
       </div>
     </Carousel>
   </header>
 );
};

export default Header;
