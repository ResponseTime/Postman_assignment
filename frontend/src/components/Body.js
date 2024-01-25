import React, { useContext } from 'react'
import bodyContext from '../context/bodycontext'
const Body = () => {
    const context = useContext(bodyContext)
    const { body, setBody } = context
    console.log(body)
    return (
        <div className="m-auto flex justify-center w-1/2 border-b-gray-900">
            <textarea placeholder={"Enter Post Body"}
                name="postContent"
                rows={10}
                cols={300}
                value={body}
                class="bg-slate-500 rounded-lg p-5 h-1/2 text-black"
                onChange={(e) => { setBody(e.target.value) }}
            />
        </div >
    )
}

export default Body
