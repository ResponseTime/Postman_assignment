import React, { useState } from "react"
import headerContext from "./headerscontext";

const HeaderState = (props) => {
    const [inputValues, setInputValues] = useState([{ key: 'Content-Type', value: 'application/json' }, { key: 'Accept-Encoding', value: 'gzip, deflate, br' }, { key: "Connection", value: 'keep-alive' }])
    const [text, setText] = useState("")
    const [method, setMethod] = useState("GET")
    const [pmethod, setPMethod] = useState(null)
    return (
        <headerContext.Provider value={{ inputValues, setInputValues, text, setText, method, setMethod, pmethod, setPMethod }}>
            {props.children}
        </headerContext.Provider>
    )
}

export default HeaderState