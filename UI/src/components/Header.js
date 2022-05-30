import React from "react";
import {NavLink} from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
            <header>
                <nav className="navbar">
        <div className="items">
          <div className="navbar_left_items clicking">
            <ul>
              <input type="checkbox" id="checkbox_toggle" />
              <label htmlFor="checkbox_toggle" className="hamburger">☰</label>
              <div id="collapse">
                <li><NavLink to="" className="order_book" exact activeClassName = "active" >Order Book</NavLink></li>
                <li><NavLink  to="order_history" className="order_history" exact activeClassName = "active">Order History</NavLink></li>
              </div>
            </ul>
          </div>
          <div className="navbar_right_items" id="user">
            <ul>
              <form action target="_self" method="post">
                <div className="enter_user">
                  <li><input type="text" placeholder="Enter User ID" id="id" required /></li>
                  <li><i className="fa fa-user" style={{fontSize: '40px', color: 'rgb(75, 75, 75)'}} /></li>
                </div>
              </form>
            </ul>
          </div>
        </div>
      </nav>

            </header>
        );
    }
}

export default Header;