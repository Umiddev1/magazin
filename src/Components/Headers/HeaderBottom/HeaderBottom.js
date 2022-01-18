import React from "react";
import './HeaderBottom.css';
function HeaderBottom() {
  return (
    <div className="headerbottom">
      <div className="container">
        <nav className="headerbottom__nav nav">
          <ul className="nav__list">
           <li className="nav__item"><a className="nav__link" href="#">Food Service</a></li>
           <li className="nav__item"><a className="nav__link" href="#">Health & Beauty</a></li>
           <li className="nav__item"><a className="nav__link" href="#">Industrial Ingredients</a></li>
           <li className="nav__item"><a className="nav__link" href="#">Bevarges</a></li>
           <li className="nav__item"><a className="nav__link" href="#">Pet Supplies</a></li>
           <li className="nav__item"><a className="nav__link active" href="#">Frozen</a></li>
           <li className="nav__item"><a className="nav__link" href="#">Cleaning Products</a></li>
          </ul>
          <div>
          </div>
        </nav>
        <div className="links">
          <p className="links__text"><a className="links__link" href="#">Frozen</a> <span> <i class="far fa-chevron-right"></i></span> <a className="links__link" href="#">Juice</a> <span> <i class="far fa-chevron-right"></i></span> <a className="links__link" href="#">Mott's Unswetenned Applesauce</a></p>
        </div>
      </div>
    </div>
  ) 
}

// const obj = {
//   food:"Food Service", 
//   health:"Health & Beauty",
//   ind:"Industrial Ingredients", 
//   bev:"Bevarges",
//   pet:"Pet Supplies",
//   frozen:"Frozen",
//   clean:"Cleaning Products" 
// }
// console.log(obj)

export default HeaderBottom;