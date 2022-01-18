import './HeaderMiddle.css';

function HeaderMiddle() {
  return (
    <div className="headermiddle">
      <div className="container">
        <div className="headermiddle__gr">
            <div className="headermiddle__logos">
              <a className="headermiddle__logo" href="#">Logo</a>
              <form className="headermiddle__form">
                <input className="headermiddle__inp" type="search" placeholder="Type to Search"/>
                <i class="fal fa-search search"></i>
              </form>
              <select className="headermiddle__select">
                <option>All Categories</option>
              </select>
            </div>
            <div className="headermiddle__icons">
              <ul className="headermiddle__list"> 
                <li className="headermiddle__item"><span className="headermiddle__icon"><i class="far fa-gift"></i></span> <span className="headermiddle__text">Orders</span></li>
                <li className="headermiddle__item"><span className="headermiddle__icon"><i class="fal fa-cart-plus"></i></span> <span className="headermiddle__text">Cart</span></li>
                <li className="headermiddle__item"><span className="headermiddle__icon"><i class="fas fa-user"></i></span> <span className="headermiddle__text">Profile</span></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMiddle;