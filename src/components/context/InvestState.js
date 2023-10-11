import { useState } from "react";
import InvestContext from "./investContext";

const InvestState =(props)=>{
    const [advisorO, setAdvisorO] = useState({});
      return(
        <InvestContext.Provider value={{advisorO, setAdvisorO}}>
            {props.children}
        </InvestContext.Provider>
      )
}
export default InvestState;