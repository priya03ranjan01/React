import React from "react";
import axios from "axios";
import {useEffect,useState} from "react";

function API() {
    const [symbols, setSymbols] = useState([]);

useEffect(() => {
    axios.get("localhost:9090/getsymbols")
        .then(Res => {
          setSymbols(Res.data.symbols);
     })
        .catch(err => {
          console.log(err)
        })

},["localhost:9090/getsymbols"])

  return(
    <div>
      <ul>
        {
          symbols.map(symbols => (
            <li>{symbols}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default API;