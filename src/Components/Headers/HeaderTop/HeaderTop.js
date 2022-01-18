import React from 'react';
import './HeaderTop.css';
function HeaderTop() {
  return (
    <div className="headertop">
      <div className="container">
        <div className="headertop__gr">
          <div className="headertop__lang">
            <p className="headertop__text">En</p>
            <p className="headertop__add"><i class="far fa-map-marker-alt"></i> Austin Texas, Tx <i class="fal fa-angle-down"></i></p>
          </div>
          <div className="headerto__phones">
            <a className="headerto__phone" href="tel:18005326220">+1 (800) 532 6220</a>
            <p className="headertop__help">Help Center</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop;