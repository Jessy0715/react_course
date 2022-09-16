import React, { useState } from "react";
import { Provider } from './Context';
import UseContextBtn from './UseContextBtn';


const UseContext = () => {

  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  const contextValue = {
    open, toggle
  }

  return (
    <div>
      <Provider value={contextValue}>
        <div>
          <UseContextBtn />
          {
            open && <div>some context</div>
          }
        </div>
      </Provider>
    </div>
  )
}

export default UseContext;