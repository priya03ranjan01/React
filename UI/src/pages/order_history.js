import React from "react";

class OrderHistory extends React.Component{  
    render(){
    return(
        <main>
        <div id="b-placeholder">
        </div>
        <div className="container">
          <div className="buttons">
            <button className="cancel" id="cancel_all" onclick>Cancel All</button>
            <button className="cancel" id="cancel_buys" onclick>Cancel Buys</button>
            <button className="cancel" id="cancel_sells" onclick>Cancel Sells</button>
          </div>
          <div className="history_screen">Order History Screen</div>
        </div>

    <script src="java2.js"></script>

      </main>
    );
    }

}

export default OrderHistory;