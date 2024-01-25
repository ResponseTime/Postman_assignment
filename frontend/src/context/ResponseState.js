import React, { useState } from "react"
import responseContext from "./responseContext"

const ResponseState = (props) => {
    const [response, setResponse] = useState()
    return (
        <responseContext.Provider value={{ response, setResponse }}>
            {props.children}
        </responseContext.Provider>
    )
}

export default ResponseState