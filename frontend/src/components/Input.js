import React, { useContext, useState } from 'react'
import headerContext from '../context/headerscontext'
import bodyContext from '../context/bodycontext'
import responseContext from '../context/responseContext'
import { Link } from "react-router-dom"
import axios from "axios"
const Input = () => {
    const headers = useContext(headerContext)
    const body = useContext(bodyContext)
    const res = useContext(responseContext)
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/postman/serve", {
                url: headers.text,
                method: headers.method,
                headers: headers.inputValues,
                body: JSON.stringify(body),
            })
            res.setResponse(response.data)
        }
        catch (err) {
            res.setResponse(err)
        }
    }
    const handle = (e) => {
        headers.setMethod(e.target.value)
        headers.setPMethod(null)
    }
    const methods = ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"]
    return (
        <>
            <div className="input flex gap-2 bg-orange-200 justify-between w-1/2 mx-auto my-[2%] items-center p-5 border-2  border-orange-500 rounded-lg">
                <div className="inline-block relative">
                    <select className="block appearance-none border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" onChange={handle}>
                        {methods.map((method) => {
                            return <option value={method} key={method}>{headers.pmethod ? headers.pmethod : method}</option>
                        })}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M6 9l4 4 4-4"></path>
                        </svg>
                    </div>
                </div>
                <input type="text" placeholder="https://" className="w-1/2 p-2 rounded-lg" onChange={(e) => { headers.setText(e.target.value) }} value={headers.text} />
                <button className="inline-block relative bg-white p-2 rounded-lg w-1/6" onClick={handleSubmit}>
                    Submit
                </button>
            </div >
            <div className="options flex justify-center space-x-20 bg-orange-200 m-5 border-2  border-orange-500 rounded-lg p-5 w-[80%] mx-auto">
                <Link to="/">
                    Add Headers
                </Link>
                <Link to="/body">
                    Add Body
                </Link>
            </div>
        </>
    )
}

export default Input
