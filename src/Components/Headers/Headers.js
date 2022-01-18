import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import HeaderMiddle from './HeaderMiddle/HeaderMiddle';
import HeaderBottom from './HeaderBottom/HeaderBottom';
class Headers extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <header className="header">
         <HeaderTop />
         <HeaderMiddle />
         <HeaderBottom />
      </header>
    )
  }
}

export default Headers;