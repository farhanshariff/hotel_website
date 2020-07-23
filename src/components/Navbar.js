import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper container hello " height="80">
            <img
              src="https://aiosell.com/wp-content/uploads/2019/07/Aiosell-Logo-white-revised.png"
              alt="Aiosell’s"
              data-retina="https://aiosell.com/wp-content/uploads/2019/07/Aiosell-Logo-white-revised.png"
              data-width="300"
              data-height="70"
              width="300"
              height="70"
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
