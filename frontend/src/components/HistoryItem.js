import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import headerContext from '../context/headerscontext'
import bodyContext from '../context/bodycontext'
const HistoryItem = (props) => {
    const navigate = useNavigate()
    const headers = useContext(headerContext)
    const body = useContext(bodyContext)
    const [click, setClick] = useState(false)
    const [data, setData] = useState(null)
    useEffect(() => {
        if (data) {
            headers.setPMethod(data.method)
            headers.setText(data.url)
            body.setBody(data.body)
            headers.setInputValues(data.headers)
            headers.setMethod(data.method);
        }
    }, [click])

    const hand = (data) => {
        setData(data)
        setClick(true)
    }
    return (
        <>
            <div className="flex space-x-6 cursor-pointer">
                <span className='w-1/12' >{props.data.method}</span>
                <span className='w-1/2'>{props.data.url}</span>
                <button className='flex justify-center top-0 right-0 w-1/4 text-center bg-orange-300 rounded-md' onClick={() => { hand(props.data) }}>Open</button>
            </div>
        </>
    )
}

export default HistoryItem
