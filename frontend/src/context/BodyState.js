import { useState } from "react";
import bodyContext from "./bodycontext";

const BodyState = (props) => {
    const [body, setBody] = useState("")
    return (
        <bodyContext.Provider value={{ body, setBody }}>
            {props.children}
        </bodyContext.Provider >
    )
}

export default BodyState